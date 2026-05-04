"use client";

import { useState } from "react";
import PrimaryButton from "@/components/ui/buttons/PrimaryButton";
import InputDark from "@/components/ui/inputs/dark/InputDark";
import TextAreaDark from "@/components/ui/inputs/dark/TextAreaDark";
import { IconCheckboxUncheckedOutline18, IconCheckboxCheckedOutline18 } from "nucleo-ui-outline-18";

export default function InterestForm() {
    const [form, setForm] = useState({
        email: "",
        privacy: false,
    });

    const Icon = form.privacy ? IconCheckboxCheckedOutline18 : IconCheckboxUncheckedOutline18;

    return (
        <form className="w-full flex flex-col gap-md">
            <div className="relative">
                <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="Fyll i din mejladress här"
                    className="
						w-full py-md border-b border-background text-large 
						focus:outline-none
						placeholder:text-background
					"
                />
                <button
                    type="submit"
                    className="absolute right-0 top-1/2 -translate-y-1/2 min-w-30"
                >
                    <PrimaryButton label="Skicka" />
                </button>
            </div>

            <button
                type="button"
                onClick={() => setForm({ ...form, privacy: !form.privacy })}
                className="inline-flex flex-row items-center gap-xs"
            >
                <Icon />
                <p className="text-small">
                    Genom att skicka in formuläret godkänner du vår integritetspolicy.
                </p>
            </button>
        </form>
    );
}
