import { useQuery } from "react-query";
import { IProducts } from "../../interface/IProducts";
import { mksAPI } from "../api";

export function GetProducts() {
  return useQuery<IProducts>('products', async () => {
    const { data }: { data: IProducts } = await mksAPI.get(`products?page=1&rows=8&sortBy=id&orderBy=DESC`)

    return data
  },
    {
      staleTime: 1000 * 60, // 1 minuto para recarregar a requisição
      refetchOnWindowFocus: false, //remove o recarremento da request caso a tela volte a ter foco
    }
  );
}