import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
// import { IGenericErrorResponse } from "@/types";
// import { postService } from "@/services/auth";


interface IGenericErrorResponse {
    message: string;
}

// interface ProxyRequest {
//   endpoint: string;
//   data: Record<string, unknown>;
// }

export const usePost = <T>(
    endpoint: string,
    onSuccess?: (data: T) => void
) => {
    return useMutation({
        mutationFn: async (data: Record<string, unknown>) => {
            const response = await fetch("/api/proxy", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ endpoint, data }),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || "Failed to post data");
            }

            return result as T;
        },

        onSuccess: (data) => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            toast.success((data as any).message || "Request successful");
            if (onSuccess) onSuccess(data);
        },

        onError: (error: IGenericErrorResponse) => {
            toast.error(error.message || "Something went wrong");
        },
    });
};


// export const usePost = <T>(endpoint: string, onSuccess?: (data: T) => void) => {
//     return useMutation({
//         mutationFn: (data: Record<string, unknown>) => postService.request(endpoint, data),
//         onSuccess: (data) => {
//             toast.success(data.message);
//             if (onSuccess) {
//                 onSuccess(data);
//             }
//         },
//         onError: (error: IGenericErrorResponse) => {
//             toast.error(error.message);
//         },
//     });
// };
