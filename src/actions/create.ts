"use server";
import { revalidatePath, revalidateTag } from "next/cache";


export const createProject = async (formData: FormData) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/projects`, {
        method: "POST",
        body: formData,
        credentials: "include",
    });

    const result = await res.json();
    if (res.ok && result?.success) {
        revalidateTag("PROJECTS");
        revalidatePath("/projects");
    }

    return result;
};
