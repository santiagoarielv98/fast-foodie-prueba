import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ConfirmSchema, ConfirmSchemaValues } from "../schemas/confirm-schema";

export default function useConfirm(defaultValues?: Partial<ConfirmSchemaValues>) {
  return useForm<ConfirmSchemaValues>({
    mode: "all",
    resolver: zodResolver(ConfirmSchema),
    defaultValues,
  });
}
