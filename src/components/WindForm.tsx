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

import { generateCompassCorrections } from '@/lib/utils'
import { Correction } from '@/types'

type Props = {
  setWindCorrection: (windCorrections: Correction[]) => void
}

const formSchema = z.object({
  windDirection: z.string(),
  windSpeed: z.string(),
  trueAirspeed: z.string()
})

export const WindForm = ({ setWindCorrection }: Props) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      windDirection: '315',
      windSpeed: '10',
      trueAirspeed: '90'
    }
  })

  const onSubmit = ({
    windDirection,
    windSpeed,
    trueAirspeed
  }: z.infer<typeof formSchema>) => {
    const windCorrections = generateCompassCorrections({
      windDirection: Number(windDirection),
      windSpeed: Number(windSpeed),
      trueAirspeed: Number(trueAirspeed)
    })

    setWindCorrection(windCorrections)
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
                <Input {...field} type="number" />
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
                <Input {...field} type="number" />
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
                <Input {...field} type="number" />
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
