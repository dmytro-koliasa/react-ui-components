import { Typography } from '@/shared/ui/Typography';

interface ErrorMessageProps {
  className?: string;
  error: string;
}

export const ErrorMessage = ({ error, className }:ErrorMessageProps) => (
  <Typography className={className} variant="body-3" color="red">{error}</Typography>
);
