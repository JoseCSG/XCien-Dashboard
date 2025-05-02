
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";

interface PlazaComparisonProps {
  data: Array<{
    name: string;
    ingresos: number;
    visitantes: number;
    conversion: number;
  }>;
}

export function PlazaComparison({ data }: PlazaComparisonProps) {
  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle>Comparativa entre Plazas</CardTitle>
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
            <Bar dataKey="ingresos" fill="#3B82F6" name="Ingresos (miles)" />
            <Bar dataKey="visitantes" fill="#10B981" name="Visitantes (cientos)" />
            <Bar dataKey="conversion" fill="#F59E0B" name="Tasa de Conversión (%)" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
