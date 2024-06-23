"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useWindowSize } from "usehooks-ts";

// This button/component is completely optional, I use it on boilerbase.io as the "Quality Promise" button on the hero section of my home page.
// On mobile, this opens up as a drawer from the bottom

// TODO: Either remove this component from the home hero section or personalize it to be your own
export function QualityPromise() {
  const [open, setOpen] = React.useState(false);
  const { width = 0, height = 0 } = useWindowSize();
  const isDesktop = width >= 768;

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="secondary">Our Quality Promise</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[525px]">
          <DialogHeader>
            <DialogTitle className="mb-3">Our quality promise.</DialogTitle>
            <DialogDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              quae excepturi maxime hic sequi quaerat eum accusamus odio ipsa
              laboriosam neque ipsam tempora minima quod, suscipit soluta
              voluptatem fugit ratione.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="secondary">Our quality promise &rarr;</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle className="mb-3">Our Promise to You</DrawerTitle>
          <DrawerDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem ad qui error? Ipsum corporis, doloribus cumque saepe
            eveniet quaerat sit quam incidunt enim quibusdam eligendi alias
            possimus ratione autem veritatis!
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
