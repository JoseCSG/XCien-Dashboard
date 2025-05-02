
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
  Wifi, 
  WifiOff, 
  ChartBar, 
  Network,
  Server
} from "lucide-react";

export function DashboardSidebar() {
  const [activeItem, setActiveItem] = useState("general");
  
  const menuItems = [
    { id: "general", title: "Panel Principal", icon: Network, path: "/" },
    { id: "growth", title: "Rendimiento de Red", icon: TrendingUp, path: "/growth" },
    { id: "diagnostics", title: "Diagnóstico Técnico", icon: ChartBar, path: "/diagnostics" },
    { id: "network", title: "Estado de Nodos", icon: WifiOff, path: "/network" },
    { id: "reports", title: "Informes Automáticos", icon: Server, path: "/reports" },
    { id: "notifications", title: "Alertas", icon: Mail, path: "/notifications" }
  ];

  return (
    <Sidebar>
      <SidebarContent>
        <div className="p-4">
          <h2 className="text-2xl font-bold">NetMonitor</h2>
          <p className="text-sm text-muted-foreground">Monitoring Network</p>
        </div>
        <SidebarGroup>
          <SidebarGroupLabel>Monitoreo</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton
                    asChild
                    className={activeItem === item.id ? "bg-secondary" : ""}
                    onClick={() => setActiveItem(item.id)}
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
