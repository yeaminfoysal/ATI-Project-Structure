"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePost } from "@/src/hooks/usePost";
import { Button } from "../../ui/button";

const warehouseSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().optional(),
  location: z.string().min(1, "Location is required"),
  isActive: z.boolean(),
});

type WarehouseFormData = z.infer<typeof warehouseSchema>;

export default function CreateWarehouse() {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<WarehouseFormData>({
    resolver: zodResolver(warehouseSchema),
    defaultValues: {
      isActive: true,
    },
  });

  const { mutate: createWarehouse, isPending } = usePost<{ message: string }>(
    "/warehouses",
    (data) => {
      console.log("Server response:", data);
      reset();
    }
  );

  const onSubmit = (data: WarehouseFormData) => {
    createWarehouse(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto mt-10 flex flex-col gap-4 border p-6 rounded-lg"
    >
      <h2 className="text-2xl font-bold text-center">Create Warehouse</h2>

      <input
        type="text"
        placeholder="Name"
        {...register("name")}
        className="border p-2 rounded"
      />
      {errors.name && <p className="text-red-500">{errors.name.message}</p>}

      <textarea
        placeholder="Description"
        {...register("description")}
        className="border p-2 rounded"
      />
      {errors.description && <p className="text-red-500">{errors.description.message}</p>}

      <input
        type="text"
        placeholder="Location"
        {...register("location")}
        className="border p-2 rounded"
      />
      {errors.location && <p className="text-red-500">{errors.location.message}</p>}

      <label className="flex items-center gap-2">
        <input type="checkbox" {...register("isActive")} />
        Active
      </label>

      <Button type="submit" disabled={isPending}>
        {isPending ? "Creating..." : "Create Warehouse"}
      </Button>
    </form>
  );
}
