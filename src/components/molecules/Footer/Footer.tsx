import { Flex } from '@/components/atoms'
import ContactCard from '@/components/atoms/ContactCard/ContactCard'

const contactsInfo = [
  {
    id: '1',
    address: 'Lorem ipsum dollor asit amet Lorem ipsum dollor asit amet',
    tell: '(98) 989101258',
    email: 'rafaelsanto10s@gmail.com',
  },
  {
    id: '2',
    address: 'Lorem ipsum dollor asit amet Lorem ipsum dollor asit amet',
    tell: '(98) 989101258',
    email: 'rafaelsanto10s@gmail.com',
  },
]

const Footer = () => {
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
