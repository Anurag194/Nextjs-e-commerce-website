import StoreLayout from "@/components/store/StoreLayout";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata = {
    title: "GoCart. - Store Dashboard",
    description: "GoCart. - Store Dashboard",
};

export default function RootAdminLayout({ children }) {

    return (
        <>
        <ClerkProvider>
            <StoreLayout>
                {children}
            </StoreLayout>
            </ClerkProvider>
        </>
    );
}
