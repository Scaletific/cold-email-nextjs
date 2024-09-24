import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import {
  ChevronDownIcon,
  Home,
  MailIcon,
  InboxIcon,
  User2Icon,
} from "lucide-react";
import Link from "next/link";
import * as React from "react";

type Menu = {
  label: string;
  name: string;
  icon: React.ReactNode;
  submenu?: Submenu[];
  href: string;
};

type Submenu = {
  name: string;
  icon: React.ReactNode;
  href: string;
};

export function SidebarMenu() {
  const menus: Menu[] = [
    {
      label: "Overview",
      name: "Dashboard",
      icon: <Home size={15} className="mr-2" />,
      href: "/home",
    },
    {
      label: "Overview",
      name: "Generate Email",
      icon: <MailIcon size={15} className="mr-2" />,
      href: "/email",
    },
    {
      label: "Overview",
      name: "History",
      icon: <InboxIcon size={15} className="mr-2" />,
      href: "/history",
    },
    {
      label: "Profile",
      name: "Profile",
      icon: <User2Icon size={15} className="mr-2" />,
      href: "/profile",
    },
  ];

  const uniqueLabels = Array.from(new Set(menus.map((menu) => menu.label)));

  return (
    <ScrollArea className="h-full overflow-hidden lg:w-48 sm:w-full bg-primary dark:bg-background dark:text-white text-sm">
      <div className="md:px-4 sm:p-0 mt-5">
        {uniqueLabels.map((label, index) => (
          <React.Fragment key={label}>
            {label && (
              <p
                className={`mx-4 mb-3 text-xs text-left tracking-wider font-bold text-gray-300 ${
                  index > 0 ? "mt-10" : ""
                }`}
              >
                {label}
              </p>
            )}
            {menus
              .filter((menu) => menu.label === label)
              .map((menu) => (
                <React.Fragment key={menu.name}>
                  {menu.submenu && menu.submenu.length > 0 ? (
                    <Accordion
                      key={menu.name}
                      type="single"
                      className="mt-[-10px] mb-[-10px] p-0 font-normal"
                      collapsible
                    >
                      <AccordionItem
                        value="item-1"
                        className="m-0 p-0 font-normal"
                      >
                        <AccordionTrigger>
                          <a
                            key={menu.name}
                            className="w-full flex justify-start text-xs font-normal h-10 bg-header-color my-2 items-center p-4 hover:bg-blue-800 text-gray-300 hover:text-white rounded-md"
                          >
                            <div
                              className={cn(
                                "flex justify-between w-full [&[data-state=open]>svg]:rotate-180"
                              )}
                            >
                              <div className="flex">
                                <div className="w-6">{menu.icon}</div>
                                {menu.name}
                              </div>
                              <ChevronDownIcon className="h-4 w-4 shrink-0 text-gray-400 transition-transform duration-200" />
                            </div>
                          </a>
                        </AccordionTrigger>
                        <AccordionContent>
                          {menu.submenu.map((submenu) => (
                            <Link
                              key={submenu.name}
                              href={submenu.href}
                              className="text-gray-300 mt-0 mb-0 flex text-xs h-10 bg-header-color dark:hover:bg-blue-700 my-2 items-center p-4 hover:bg-blue-800 hover:text-white rounded-md"
                            >
                              <div className="w-6">{submenu.icon}</div>
                              {submenu.name}
                            </Link>
                          ))}
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  ) : (
                    <div key={menu.name}>
                      <Link
                        href={menu.href}
                        className="flex text-xs h-10 bg-header-color my-2 items-center p-4 hover:bg-blue-800 text-gray-300 hover:text-white rounded-md"
                      >
                        <div className="w-6">{menu.icon}</div>
                        {menu.name}
                      </Link>
                    </div>
                  )}
                </React.Fragment>
              ))}
          </React.Fragment>
        ))}
      </div>
    </ScrollArea>
  );
}
