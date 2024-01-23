import { Flex } from '@/components/atoms'
import ContactCard, {
  ContactCardProps,
} from '@/components/atoms/ContactCard/ContactCard'

type FooterProps = {
  contactsInfo?: ContactCardProps[]
}

const Footer = ({ contactsInfo }: FooterProps) => {
  return (
    <footer>
      <Flex className="p-[3.125rem] bg-salmon mt-10 gap-6">
        {contactsInfo?.map(({ id, address, email, tell }) => (
          <ContactCard key={id} address={address} email={email} tell={tell} />
        ))}
      </Flex>
    </footer>
  )
}

export default Footer
