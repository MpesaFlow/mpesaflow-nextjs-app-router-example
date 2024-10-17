'use client'

import { useActionState } from "react"
import * as React from "react"
import { MpesaFlowAction } from "./actions"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"


export default function Home() {
  const [state, formAction, pending] = useActionState(MpesaFlowAction, undefined)

  React.useEffect(() => {
    if (!state) {
      return;
    }

    if ("message" in state) {
      toast.success(state.message?.mpesaStatus?.ResultDesc);
    } else if ("error" in state) {
      toast.error(`Error when sending transaction: ${state.error}`);
    }
  }, [state]);

  return (
    <div className="bg-zinc-950 p-8 min-h-screen flex justify-center items-center sm:items-start sm:p-24">
      <div className="mx-auto w-full max-w-5xl sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 shadow-2xl rounded-lg sm:rounded-3xl sm:px-24 xl:py-32 flex items-center flex-col">
          <h2 className="max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Send your first transaction
          </h2>

          <p className="mt-2 max-w-xl text-center text-lg leading-8 text-gray-300">
            Send you first transaction to you phone
          </p>

          <form
            className="mt-10 flex max-w-md gap-4 items-start w-full"
            action={formAction}
          >
            <Label htmlFor="phoneNumber" className="sr-only">
              Phone Number
            </Label>

            <Input

              name="phoneNumber"
              type="text"
              required

              placeholder="254712995436"

              className="w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
            />

            <input type="hidden" name="amount" value={'1'} />

            <input type="hidden" name="transactionDesc" value={'Payment of x'} />
            <input type="hidden" name="accountReference" value={'MPESAFLOW PREMIUM'} />

            <Button disabled={pending} type="submit" className="w-fit">
              {pending ? 'submiting...' : 'submit'}
            </Button>

          </form>

          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
          >
            <circle
              r={512}
              cx={512}
              cy={512}
              fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
              fillOpacity="0.7"
            />

            <defs>
              <radialGradient
                r={1}
                cx={0}
                cy={0}
                id="759c1415-0410-454c-8f7c-9a820de03641"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(512 512) rotate(90) scale(512)"
              >
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" stopOpacity={0} />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>

  )
}