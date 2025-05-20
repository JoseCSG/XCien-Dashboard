
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";

interface NetworkComparisonProps {
  data: Array<{
    name: string;
    bandwidth: number;
    latency: number;
    availability: number;
  }>;
}

export function PlazaComparison({ data }: NetworkComparisonProps) {
  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle>Comparativa de Nodos</CardTitle>
      </CardHeader>
      <CardContent className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="bandwidth" fill="#3B82F6" name="Ancho de Banda (Mbps)" />
            <Bar dataKey="latency" fill="#EF4444" name="Latencia (ms)" />
            <Bar dataKey="availability" fill="#10B981" name="Disponibilidad (%)" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
