import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/navbar";


import { siteConfig } from "@/config/site";




export const Navbar = () => {
 

  return (
    <HeroUINavbar
      position="sticky"
      className="bg-[#18332F]  lg:py-1 "
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <Link
            className="flex justify-start items-center gap-1"
            color="foreground"
            href="/"
          >
            <h1 className=" text-xl font-bold text-white">
              <span className="text-xl self-center">IdleFarmer</span>
              <span className="text-[#F2FF79] text-3xl font-extrabold">.</span>
            </h1>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="center"
      >
        <div className="hidden lg:flex gap-10 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <Link
                underline="hover"
                className="text-white hover:text-[#F2FF79] text-sm font-normal"
                href={item.href}
              >
                {item.label}
              </Link>
            </NavbarItem>
          ))}
        </div>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden md:flex">
          <Button
            isExternal
            as={Link}
            className=" rounded-full text-sm font-medium text-[#18332F] bg-[#F2FF79]"
            href={siteConfig.links.sponsor}
            
          >
            Become an Agent
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="lg:hidden flex basis-1 pl-4" justify="end">
        <NavbarMenuToggle className="text-[#F2FF79]"/>
      </NavbarContent>

      <NavbarMenu>
        
        <div className="mx-0 mt-2 flex flex-col gap-2 ">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="text-sm font-normal text- hover:text-[#F2FF79]"
                href="#"
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
