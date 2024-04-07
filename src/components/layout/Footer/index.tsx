import FooterMenu from "@/components/shared/FooterMenu";

const Footer = () => {
  const productGroup1 = [
    {
      title: "Proposals",
      link: "#",
    },
    {
      title: "Contracts",
      link: "#",
    },
    {
      title: "Invoicing",
      link: "#",
    },
    {
      title: "Client CRM",
      link: "#",
    },
    {
      title: "Time Tracking",
      link: "#",
    },
    {
      title: "Task Tracking",
      link: "#",
    },
    {
      title: "Forms",
      link: "#",
    },
    {
      title: "Accounting",
      link: "#",
    },
    {
      title: "Bonsai Tax",
      link: "#",
    },
    {
      title: "Bonsai Cash",
      link: "#",
    },
  ];
  const productGroup2 = [
    {
      title: "Pricing",
      link: "#",
    },
    {
      title: "Bonsai Reviews",
      link: "#",
    },
  ];
  const freeRecoursesGroup1 = [
    {
      title: "Freelance Resources",
      link: "#",
    },
    {
      title: "Freelance Blog by Bonsai",
      link: "#",
    },
    {
      title: "How to Write a Contract",
      link: "#",
    },
    {
      title: "Online Signature Maker",
      link: "#",
    },
  ];
  const freeRecoursesGroup2 = [
    {
      title: "Self-Employed Taxes Hub",
      link: "#",
    },
    {
      title: "Self-Employed Tax Calculator",
      link: "#",
    },
    {
      title: "Self-Employed Tax Deductions",
      link: "#",
    },
  ];
  const templatesGroup = [
    {
      title: "Invoice Templates",
      link: "#",
      submenu: [
        {
          title: "Invoice Generator",
          link: "#",
        },
        {
          title: "Blank Invoice Template",
          link: "#",
        },
        {
          title: "Consultant Invoice Template",
          link: "#",
        },
        {
          title: "Editable Invoice Template",
          link: "#",
        },
        {
          title: "Graphic Design Invoice",
          link: "#",
        },
        {
          title: "Web Design Invoice",
          link: "#",
        },
      ],
    },
    {
      title: "Proposal Templates",
      link: "#",
    },
    {
      title: "Contract Templates",
      link: "#",
    },
    {
      title: "Agreement Templates",
      link: "#",
    },
    {
      title: "Scope of Work Templates",
      link: "#",
    },
    {
      title: "Quote Templates",
      link: "#",
    },
    {
      title: "Credit Note Templates",
      link: "#",
    },
    {
      title: "Estimate Templates",
      link: "#",
    },
    {
      title: "Form Templates",
      link: "#",
    },
  ];
  const bonsaiGroup1 = [
    {
      title: "About",
      link: "#",
    },
    {
      title: "Careers",
      link: "#",
    },
    {
      title: "Support",
      link: "#",
    },
    {
      title: "LinkedIn",
      link: "#",
    },
    {
      title: "Twitter",
      link: "#",
    },
    {
      title: "Privacy policy",
      link: "#",
    },
    {
      title: "Legal",
      link: "#",
    },
  ];

  const bonsaiGroup2 = [
    {
      title: "Affiliates",
      link: "#",
    },
    {
      title: "Write for Us",
      link: "#",
    },
  ];

  const bonsaiGroup3 = [
    {
      title: "Comparisons",
      link: "#",
      submenu: [
        {
          title: "Freshbooks Alternatives",
          link: "#",
        },
        {
          title: "Quickbooks Alternatives",
          link: "#",
        },
        {
          title: "Wave vs Quickbooks",
          link: "#",
        },
        {
          title: "Xero vs Quickbooks",
          link: "#",
        },
        {
          title: "Freshbooks vs Quickbooks",
          link: "#",
        },
      ],
    },
  ];

  return (
    <div className="container flex justify-around">
      <div>
        <FooterMenu title="Product" items={productGroup1} />
        <FooterMenu items={productGroup2} />
      </div>
      <div>
        <div>
          <FooterMenu title="Free Resources" items={freeRecoursesGroup1} />
          <FooterMenu items={freeRecoursesGroup2} />
        </div>
        <FooterMenu title="Templates" items={templatesGroup} />
      </div>
      <div>
        <FooterMenu title="Bonsai" items={bonsaiGroup1} />
        <FooterMenu items={bonsaiGroup2} />
        <FooterMenu items={bonsaiGroup3} />
      </div>
    </div>
  );
};

export default Footer;
