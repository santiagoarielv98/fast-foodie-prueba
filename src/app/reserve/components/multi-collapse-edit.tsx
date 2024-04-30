import clsx from "clsx";
import { Button, Collapse } from "react-bootstrap";

interface MultiCollapseEditProps {
  openRender: React.ReactNode;
  closeRender: React.ReactNode;
  title?: string;
  icon?: string;
  open: boolean;
  onToggle?: () => void;
}

export default function MultiCollapseEdit({
  icon,
  open,
  title,
  onToggle,
  openRender,
  closeRender,
}: MultiCollapseEditProps) {
  const buttonClass = clsx(open ? "outline-danger" : "outline-primary");
  const buttonIcon = open ? <i className="bi bi-x"></i> : <i className="bi bi-pencil"></i>;
  return (
    <div className="mb-2">
      <div className="gap-3 d-flex position-relative align-items-center mb-2">
        {icon && <i className={clsx("bi", icon, "fs-5")}></i>}
        <div className="flex-fill">{title && <h5 className="mb-0">{title}</h5>}</div>
        <Button variant={buttonClass} size="sm" onClick={onToggle}>
          {buttonIcon}
        </Button>
      </div>
      <Collapse in={!open}>
        <div>{closeRender}</div>
      </Collapse>
      <Collapse in={open}>
        <div>{openRender}</div>
      </Collapse>
    </div>
  );
}
