
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";

interface GrowthTrendsProps {
  data: Array<{
    month: string;
    ancho_de_banda: number;
    conexiones: number;
  }>;
}

export function GrowthTrends({ data }: GrowthTrendsProps) {
  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle>Tendencias de Red</CardTitle>
      </CardHeader>
      <CardContent className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#888" opacity={0.2} />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="ancho_de_banda" stroke="#3B82F6" activeDot={{ r: 8 }} name="Ancho de Banda (Mbps)" />
            <Line type="monotone" dataKey="conexiones" stroke="#10B981" name="Conexiones Activas" />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
