import { Button  } from './components/ui/button';
import { Github, Wand2 } from 'lucide-react';
import { Separator } from './components/ui/separator';
import { Textarea } from './components/ui/textarea';
import { Label } from './components/ui/label';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from './components/ui/select';
import { Slider } from './components/ui/slider';
import { VideoInputForm } from './components/video-input-form';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="px-6 py-3 flex items-center justify-between border-b">
        <h1 className="text-xl font-bold">upload.ai</h1>

        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">
          Implemented with 💜
          </span>

          <Separator className="h-6" orientation="vertical" />

          <Button variant="outline">
            <Github className="2-4 h-4 mr-2" />
            Github
          </Button>
        </div>
      </div>

      <main className="flex-1 p-6 flex gap-6">
        <div className="flex flex-col flex-1 gap-4">
          <div className="grid grid-rows-2 gap-4 flex-1">
            <Textarea className="resize-none p-4 leading-relaxed" placeholder="Insert your prompt" />
            <Textarea className="resize-none p-5 leading-relaxed" placeholder="AI output" readOnly />
          </div>
          <p>Tip: you can use the <code className="text-violet-400">{'{transcription}'} </code>
          variable in your prompt to add the transcription content of the selected video. </p>
        </div>

        <aside className="w-80 space-y-6">
          <VideoInputForm />

          <Separator />

          <form className='space-y-6'>
            <div className='space-y-2'>
              <Label>Prompt</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a prompt"  />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="title"> Youtube title</SelectItem>
                  <SelectItem value="description"> Youtube description </SelectItem>
                </SelectContent>
              </Select>

            </div>

            <div className='space-y-2'>
              <Label>Model</Label>
              <Select disabled defaultValue="gpt3.5">
                <SelectTrigger>
                  <SelectValue  />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gpt3.5">GPT 3.5-turbo 16k </SelectItem>
                </SelectContent>
              </Select>
              <span className="block text-xs text-muted-foreground italic">
                You will be able to customise this selection soon
              </span>
            </div>

            <Separator />

            <div className="space-y-4">
              <Label>Temperature</Label>
              <Slider min={0} max={1} step={0.1} />
              <span className="block text-xs text-muted-foreground italic leading-relaxed">
                Higher values lead to a more creative result but possible inacuracies.
              </span>
            </div>

            <Separator />

            <Button type="submit" className='w-full'>Run
              <Wand2 className='w-4 h-4 ml-2' />
            </Button>
          </form>
        </aside>
      </main>
    </div>
  )
}

export default App;
