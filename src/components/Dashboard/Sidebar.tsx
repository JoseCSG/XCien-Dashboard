
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sidebar, 
  SidebarContent, 
  SidebarGroup, 
  SidebarGroupContent, 
  SidebarGroupLabel, 
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from "@/components/ui/sidebar";
import { 
  TrendingUp, 
  Mail, 
  WifiOff, 
  ChartBar, 
  ChartLine,
  ChartPie
} from "lucide-react";

export function DashboardSidebar() {
  const [activeItem, setActiveItem] = useState("general");
  
  const menuItems = [
    { id: "general", title: "Visión General", icon: ChartPie, path: "/" },
    { id: "growth", title: "Tendencias de Crecimiento", icon: TrendingUp, path: "/growth" },
    { id: "diagnostics", title: "Diagnóstico Técnico", icon: ChartBar, path: "/diagnostics" },
    { id: "network", title: "Estado de Red", icon: WifiOff, path: "/network" },
    { id: "reports", title: "Reportes Automáticos", icon: ChartLine, path: "/reports" },
    { id: "notifications", title: "Notificaciones", icon: Mail, path: "/notifications" }
  ];

  return (
    <Sidebar>
      <SidebarContent>
        <div className="p-4">
          <h2 className="text-2xl font-bold">Plaza Pulse</h2>
          <p className="text-sm text-muted-foreground">Dashboard de Análisis</p>
        </div>
        <SidebarGroup>
          <SidebarGroupLabel>Monitoreo</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton
                    asChild
                    onClick={() => setActiveItem(item.id)}
                    className={activeItem === item.id ? "bg-secondary" : ""}
                  >
                    <Link to={item.path} className="flex items-center gap-2">
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
