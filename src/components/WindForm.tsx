'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

import { Wind } from './App'
import { getCorrectionAngleAndSpeed } from '@/lib/utils'

type Props = {
  setWindCorrection: (windCorrections: Wind) => void
}

const formSchema = z.object({
  windDirection: z.number().min(2, {
    message: 'Username must be at least 2 characters.'
  }),
  windSpeed: z.number(),
  trueAirspeed: z.number()
})

export const WindForm = ({ setWindCorrection }: Props) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      windDirection: 360,
      windSpeed: 10,
      trueAirspeed: 90
    }
  })

  const onSubmit = ({
    windDirection,
    windSpeed,
    trueAirspeed
  }: z.infer<typeof formSchema>) => {
    const updated: Wind = {
      N: getCorrectionAngleAndSpeed({
        windDirection,
        windSpeed,
        trueAirspeed,
        trueCourse: 360
      }),
      NE: getCorrectionAngleAndSpeed({
        windDirection,
        windSpeed,
        trueAirspeed,
        trueCourse: 45
      }),
      E: getCorrectionAngleAndSpeed({
        windDirection,
        windSpeed,
        trueAirspeed,
        trueCourse: 90
      }),
      SE: getCorrectionAngleAndSpeed({
        windDirection,
        windSpeed,
        trueAirspeed,
        trueCourse: 135
      }),
      S: getCorrectionAngleAndSpeed({
        windDirection,
        windSpeed,
        trueAirspeed,
        trueCourse: 180
      }),
      SW: getCorrectionAngleAndSpeed({
        windDirection,
        windSpeed,
        trueAirspeed,
        trueCourse: 225
      }),
      W: getCorrectionAngleAndSpeed({
        windDirection,
        windSpeed,
        trueAirspeed,
        trueCourse: 270
      }),
      NW: getCorrectionAngleAndSpeed({
        windDirection,
        windSpeed,
        trueAirspeed,
        trueCourse: 315
      })
    }

    setWindCorrection(updated)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="windDirection"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Wind Direction</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>The speed of the wind dumbass</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="windSpeed"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Windspeed</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>The speed of the wind dumbass</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="trueAirspeed"
          render={({ field }) => (
            <FormItem>
              <FormLabel>True airspeed</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>The speed of the wind dumbass</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
