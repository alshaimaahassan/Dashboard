import SidebarDropdown from './SidebarDropdown';

export default function SidebarDropdownItem() {

  // Dynamic items
  const items = [
    {
      label: "Ordered lists",
      icon: <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.28438 0.359375L5.31563 1.39062L2.56563 4.14062L2.05 4.57031L1.53438 4.14062L0.159375 2.76562L1.19063 1.73438L2.05 2.63672L4.28438 0.359375ZM7.55 1.5625H16.4875V2.9375H7.55V1.5625ZM4.28438 5.85938L5.31563 6.89062L2.56563 9.64062L2.05 10.0703L1.53438 9.64062L0.159375 8.26562L1.19063 7.23438L2.05 8.13672L4.28438 5.85938ZM7.55 7.0625H16.4875V8.4375H7.55V7.0625ZM4.28438 11.3594L5.31563 12.3906L2.56563 15.1406L2.05 15.5703L1.53438 15.1406L0.159375 13.7656L1.19063 12.7344L2.05 13.6367L4.28438 11.3594ZM7.55 12.5625H16.4875V13.9375H7.55V12.5625Z" fill="#202224"/>
      </svg>
      
    
    ,
      menuItems: [
        {to: '/user-dashboard', label: 'All listing' , id: 1},
        {to: '/add-user', label: 'Add new listing' , id: 2},
        { to: '#', label: 'All listing category' , id: 3},
        { to: '#', label: 'Add listing categories' , id: 4},
      ],
    },
    {
      label: "Users",
      icon: <svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_177_3090)">
      <path d="M18.7436 12C20.2788 12 21.5137 10.88 21.5137 9.5C21.5137 8.12 20.2788 7 18.7436 7C17.2083 7 15.9623 8.12 15.9623 9.5C15.9623 10.88 17.2083 12 18.7436 12ZM10.3998 11C12.2466 11 13.7262 9.66 13.7262 8C13.7262 6.34 12.2466 5 10.3998 5C8.55305 5 7.0623 6.34 7.0623 8C7.0623 9.66 8.55305 11 10.3998 11ZM18.7436 14C16.7077 14 12.6248 14.92 12.6248 16.75V19H24.8623V16.75C24.8623 14.92 20.7794 14 18.7436 14ZM10.3998 13C7.80768 13 2.6123 14.17 2.6123 16.5V19H10.3998V16.75C10.3998 15.9 10.7669 14.41 13.0364 13.28C12.0686 13.1 11.1341 13 10.3998 13Z" fill="#323232"/>
      </g>
      <defs>
      <clipPath id="clip0_177_3090">
      <rect width="26.7" height="24" fill="white" transform="translate(0.387695)"/>
      </clipPath>
      </defs>
      </svg>
      
    
    ,
      menuItems: [
        { to: '/user-dashboard', label: 'All users' , id: 1},
        { to: '/add-user', label: 'Add new user' , id: 2},
      ],
    
    },
    {
      label: "Places",
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
    </svg>
    
    ,
      menuItems: [
        { to: 'places-dashboard', label: 'All places' , id: 7},
        { to: 'add-place', label: 'Add new place' , id: 8},
      ],
    },
    {
      label: "Hotels",
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
    </svg>
    
    ,
      menuItems: [
        {to: 'hotel-dashboard' , label: 'All hotels' , id: 9},
        {to:"add-hotel" , label: 'Add new hotel' , id: 10},
      ],
    },
    {
      label: "Tour Guides",
      icon: <svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_177_3110)">
      <path d="M23.7502 4H14.8502H13.7377H8.1752V2H5.9502V4V14V22H8.1752V14H12.6252H13.7377H23.7502L21.5252 9L23.7502 4ZM19.4559 9.74L20.4572 12H13.7377H12.6252H8.1752V6H13.7377H14.8502H20.4683L19.4671 8.26L19.1333 9L19.4559 9.74ZM15.9627 9C15.9627 10.1 14.9614 11 13.7377 11C12.5139 11 11.5127 10.1 11.5127 9C11.5127 7.9 12.5139 7 13.7377 7C14.9614 7 15.9627 7.9 15.9627 9Z" fill="#323232"/>
      </g>
      <defs>
      <clipPath id="clip0_177_3110">
      <rect width="26.7" height="24" fill="white" transform="translate(0.387695)"/>
      </clipPath>
      </defs>
      </svg>
      
    
    
    ,
      menuItems: [
        { to: 'tour-dashboard', label: 'All tour guides' , id: 11},
        {to:"add-tour" , label: 'Add new guide' , id: 12},
      ],
    },
    {
      label: "Restaurant",
      icon: <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.39855 10.34L9.54692 7.51002L1.73717 0.500018C0.00167185 2.06002 0.00167185 4.59002 1.73717 6.16002L6.39855 10.34ZM13.9413 8.53002C15.6434 9.24002 18.0353 8.74002 19.8042 7.15002C21.929 5.24002 22.3407 2.50002 20.7053 1.03002C19.081 -0.429982 16.0328 -0.0699815 13.8968 1.84002C12.1279 3.43002 11.5717 5.58002 12.3615 7.11002L1.50355 16.87L3.07217 18.28L10.7373 11.41L18.3913 18.29L19.9599 16.88L12.3059 10L13.9413 8.53002Z" fill="#323232"/>
      </svg>
      
    
    ,
      menuItems: [
        { to: '#', label: 'All restaurants' , id: 13},
        { to: '#', label: 'Add new restaurant' , id: 14},
      ],
    },
  ];

  // Rendering dynamic dropdowns
  return (
    <>
    <ul>
      {items.map((item, index) => (
        <SidebarDropdown
          key={index}
          label={item.label}
          icon={item.icon}
          menuItems={item.menuItems}
        />
      ))}
    </ul>
    
    </>
  );
}

