"use client";

import { useState } from "react";

import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
	email: z
		.string()
		.min(2, "Email must be at least 2 characters.")
		.email("Invalid email address.")
		.nonempty("Email is required."),
});

export function PreOrderForm() {
	const [isSubmitted, setIsSubmitted] = useState(false);

	// 1. Define your form.
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
		},
	});

	// 2. Define a submit handler.
	function onSubmit(values: z.infer<typeof formSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log(values);
		setIsSubmitted(true);
	}

	if (isSubmitted) {
		return (
			<div className="pt-9 text-center">
				<h3 className="mb-2 font-semibold text-2xl text-primary">Thank You!</h3>
				<p className="text-slate-600">
					We&apos;ve received your pre-order request. We&apos;ll keep you
					updated on our launch progress.
				</p>
			</div>
		);
	}

	return (
		<Form {...form}>
			<form className="pt-9" onSubmit={form.handleSubmit(onSubmit)}>
				<div className="flex items-end gap-2">
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem className="w-full">
								<FormLabel>Email Address</FormLabel>
								<FormControl>
									<Input
										className="w-full"
										placeholder="you@example.com"
										type="email"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button type="submit">Pre-Order Now</Button>
				</div>

				<p className="mt-2.5 text-xs">
					We respect your privacy. Your email will only be used to send launch
					updates. See our <Link href="/privacy">Privacy Policy.</Link>
				</p>
			</form>
		</Form>
	);
}
