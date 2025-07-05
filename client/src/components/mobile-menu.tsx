import { Button } from '@/components/ui/button';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const handleLinkClick = () => {
    onClose();
  };

  return (
    <div className={`md:hidden absolute top-full left-0 right-0 w-full ${isOpen ? 'block' : 'hidden'} pb-4 bg-white shadow-md overflow-y-auto`}>
      <div className="flex flex-col space-y-3 px-4">
        <a 
          href="#features" 
          className="text-gray-600 hover:text-primary font-medium transition-colors"
          onClick={handleLinkClick}
        >
          Features
        </a>
        <a 
          href="#how-it-works" 
          className="text-gray-600 hover:text-primary font-medium transition-colors"
          onClick={handleLinkClick}
        >
          How it Works
        </a>
        <a 
          href="#testimonials" 
          className="text-gray-600 hover:text-primary font-medium transition-colors"
          onClick={handleLinkClick}
        >
          Testimonials
        </a>
        <Button 
          asChild 
          variant="default" 
          className="w-full"
        >
          <a 
            href="#waitlist"
            onClick={handleLinkClick}
          >
            Join Waitlist
          </a>
        </Button>
      </div>
    </div>
  );
}
