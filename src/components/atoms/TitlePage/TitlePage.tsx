import { Box } from '@/components/atoms'

type TitlePageProps = {
  title: string
}

const TitlePage = ({ title }: TitlePageProps) => {
  return (
    <Box className="center h-[12.5rem] bg-salmon">
      <h3 className="text-[2.8rem] text-primary font-bold">{title}</h3>
    </Box>
  )
}

export default TitlePage
