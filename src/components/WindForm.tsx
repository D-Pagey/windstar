import { Slider } from '@/components/ui/slider'
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
  setWind: ({ direction, speed }: { direction: number; speed: number }) => void
}

const formSchema = z.object({
  windDirection: z.number(),
  windSpeed: z.number(),
  trueAirspeed: z.number()
})

export const WindForm = ({ setWindCorrection, setWind }: Props) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      windDirection: 335,
      windSpeed: 15,
      trueAirspeed: 90
    }
  })

  const onSubmit = ({
    windDirection,
    windSpeed,
    trueAirspeed
  }: z.infer<typeof formSchema>) => {
    console.log({ windDirection })

    // const windCorrections = generateCompassCorrections({
    //   windDirection: Number(windDirection),
    //   windSpeed: Number(windSpeed),
    //   trueAirspeed: Number(trueAirspeed)
    // })

    // setWindCorrection(windCorrections)
    // setWind({ direction: Number(windDirection), speed: Number(windSpeed) })
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
                <Slider
                  min={1}
                  max={360}
                  step={1}
                  defaultValue={[field.value]}
                  onValueChange={(vals) => {
                    field.onChange(vals[0])
                  }}
                  value={[form.getValues('windDirection')]}
                />
              </FormControl>
              <FormDescription>Where is the wind coming from?</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="windDirection"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Wind Direction</FormLabel>
              <FormControl>
                <Input {...field} type="number" />
              </FormControl>
              <FormDescription>Where is the wind coming from?</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
