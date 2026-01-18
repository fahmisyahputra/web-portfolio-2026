"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, ImageIcon } from "lucide-react";

interface ImageCarouselProps {
    images: string[];
}

export function ImageCarousel({ images }: ImageCarouselProps) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

    useEffect(() => {
        if (!emblaApi) return;

        const onInit = () => {
            setScrollSnaps(emblaApi.scrollSnapList());
        };

        const onSelect = () => {
            setSelectedIndex(emblaApi.selectedScrollSnap());
            setPrevBtnEnabled(emblaApi.canScrollPrev());
            setNextBtnEnabled(emblaApi.canScrollNext());
        };

        onInit();
        onSelect();
        emblaApi.on("select", onSelect);
        emblaApi.on("reInit", onInit);
        emblaApi.on("reInit", onSelect);
    }, [emblaApi]);

    const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
    const scrollNext = () => emblaApi && emblaApi.scrollNext();
    const scrollTo = (index: number) => emblaApi && emblaApi.scrollTo(index);

    if (!images || images.length === 0) {
        return (
            <div className="flex aspect-video w-full items-center justify-center rounded-xl border bg-secondary/20">
                <div className="flex flex-col items-center gap-2 text-muted-foreground">
                    <ImageIcon size={32} />
                    <span className="text-sm">No images available</span>
                </div>
            </div>
        );
    }

    return (
        <div className="relative group">
            <div className="overflow-hidden rounded-xl border bg-black/5 dark:bg-white/5" ref={emblaRef}>
                <div className="flex">
                    {images.map((src, index) => (
                        <div key={index} className="relative flex-[0_0_100%] min-w-0 aspect-video">
                            <div className="relative h-full w-full bg-secondary/20 flex items-center justify-center">
                                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground z-0">
                                    <ImageIcon size={48} className="opacity-20" />
                                </div>
                                <Image
                                    src={src}
                                    alt={`Project screenshot ${index + 1}`}
                                    fill
                                    className="object-cover z-10"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Dots Pagination */}
            {scrollSnaps.length > 1 && (
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
                    {scrollSnaps.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => scrollTo(index)}
                            className={cn(
                                "h-2 w-2 rounded-full transition-all bg-white/50 hover:bg-white/80 shadow-sm",
                                index === selectedIndex && "bg-white w-4"
                            )}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            )}

            {images.length > 1 && (
                <>
                    <button
                        className={cn("absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white opacity-0 transition-opacity disabled:opacity-0 group-hover:opacity-100 backdrop-blur-sm", !prevBtnEnabled && "hidden")}
                        onClick={scrollPrev}
                        disabled={!prevBtnEnabled}
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <button
                        className={cn("absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white opacity-0 transition-opacity disabled:opacity-0 group-hover:opacity-100 backdrop-blur-sm", !nextBtnEnabled && "hidden")}
                        onClick={scrollNext}
                        disabled={!nextBtnEnabled}
                    >
                        <ChevronRight size={20} />
                    </button>
                </>
            )}
        </div>
    );
}
