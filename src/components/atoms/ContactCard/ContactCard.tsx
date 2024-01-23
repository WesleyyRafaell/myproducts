import { Box } from '@/components/atoms'

export type ContactCardProps = {
  id?: string
  tell?: string
  email?: string
  address?: string
}

const ContactCard = ({ address, email, tell }: ContactCardProps) => {
  return (
    <Box className="max-w-[18.75rem]">
      <h4 className="font-bold text-[1.25rem] mb-4">Contato</h4>
      <p className="mb-2">{address}</p>
      <p className="text-primary">{tell}</p>
      <p className="text-primary">{email}</p>
    </Box>
  )
}

export default ContactCard
