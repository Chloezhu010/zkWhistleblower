'use client'
import { useState } from "react"
import { Button } from "~~/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~~/components/ui/dialog"
import { Input } from "~~/components/ui/input"
import { Label } from "~~/components/ui/label"
import VerifyWLD from "./VerifyWLD"


export function UploadModal() {
  const [fileHash, setFileHash] = useState<string | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const hash = await calculateFileHash(file)
      setFileHash(hash)
    }
  }

  const calculateFileHash = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = () => {
        const buffer = reader.result as ArrayBuffer
        const hashBuffer = crypto.subtle.digest("SHA-256", buffer)
        hashBuffer.then((hash) => {
          const hashArray = Array.from(new Uint8Array(hash))
          const hashHex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("")
          resolve(hashHex)
        })
      }
      reader.onerror = () => reject(reader.error)
      reader.readAsArrayBuffer(file)
    })
  }

  const handleVerifySuccess = () => {
    setIsDialogOpen(false)
  }

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Upload</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share link</DialogTitle>
          <DialogDescription>
            Call out and whistleblow
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2 -z-40">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="picture" className="sr-only">
              Link
            </Label>
            <Input id="picture" type="file" onChange={handleFileUpload} />
          </div>
        </div>
        {fileHash && <p>File Hash: {fileHash}</p>}
        <Button>upload</Button>
        <VerifyWLD onSuccess={handleVerifySuccess} />
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
