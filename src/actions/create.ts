"use server";

import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export const createProject = async (formData: FormData) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/projects`, {
        method: "POST",
        body: formData,
        credentials: "include",
    });

    const result = await res.json();

    if (res.ok && result?.success) {
        revalidateTag("PROJECTS");
        revalidatePath("/dashboard/manage-project");
        redirect("/dashboard/manage-project");
    }

    return result;
};
