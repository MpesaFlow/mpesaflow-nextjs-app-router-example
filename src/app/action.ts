"use server";

import Mpesaflow from "mpesaflow";

const mpesaflow = new Mpesaflow({
	bearerToken: process.env.MPESAFLOW_API_KEY,
	environment: "sandbox",
});

interface mpesaResponse {
	mpesaStatus: {
		ResultDesc: string;
	};
}

export async function MpesaFlowAction(prevState: any, formData: FormData) {
	const amountValue = formData.get("amount");
	const amount = Number(amountValue);

	const accountReference = formData.get("accountReference") as string;
	const phoneNumber = formData.get("phoneNumber") as string;
	const transactionDesc = formData.get("transactionDesc") as string;

	console.log(amount, phoneNumber, accountReference, transactionDesc);

	try {
		const data = (await mpesaflow.transactions.create({
			amount: amount,
			accountReference: accountReference,
			phoneNumber: phoneNumber,
			transactionDesc: transactionDesc,
		})) as mpesaResponse;

		console.log("hello", data);

		if (data) {
			return {
				message: data,
			};
		}
	} catch (error) {
		return {
			error: error instanceof Error ? error.message : String(error),
		};
	}
}
