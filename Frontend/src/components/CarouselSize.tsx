import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import image from "../Assets/image.png";

export default function CarouselSize() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {Array.from({ length: 32 }).map((_, index) => (
          <CarouselItem
            key={index}
            className="pl-4 basis-1 sm:basis-1/3 md:basis-1/4 lg:basis-1/32"
          >
            <div className="p-1">
              <Card className="p-3">
                <CardContent className="space-y-2">
                  <img
                    src={image}
                    alt="Produto"
                    className="w-full h-32 object-cover rounded-md"
                  />

                  <span className="text-green-600 text-sm">in stock</span>

                  <h3 className="text-sm font-semibold">
                    EX DISPLAY · MSI Pro 16 Flex
                  </h3>
                  <p className="font-bold">$499.00</p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
