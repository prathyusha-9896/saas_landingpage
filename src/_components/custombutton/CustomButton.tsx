import Button from '@mui/material/Button'

export default function CustomButton({
  btnText = 'Button',
  btnClass = '',
  icon = '',
}) {
  return (
    <Button
      variant="contained"
      className={`!bg-[#FF9900] !text-[#01050E] !capitalize !rounded-lg !py-2 !px-4 sm:!px-6 text-[11px] sm:!text-[15px] !font-roboto !font-medium whitespace-nowrap ${btnClass}`}
      endIcon={
        icon && <img src={icon} alt="icon" className="max-w-full max-h-full" />
      }
    >
      {btnText}
    </Button>
  )
}
