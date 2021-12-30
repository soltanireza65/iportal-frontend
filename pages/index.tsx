import Head from 'next/head';
import EnterMobile from 'components/home/EnterMobile';
import EnterCode from 'components/home/EnterCode';
import EnterInformation from 'components/home/EnterInformation';
import ChooseTemplate from 'components/home/ChooseTemplate';
import TemplateSettings from 'components/home/TemplateSettings';
import EnterDomain from 'components/home/EnterDomain';
import PaymentPannel from 'components/home/PaymentPannel';
import Payment from 'components/home/Payment';
import PortalProvider from 'providers/PortalProvider';

export default function Home() {
	return (
		<>
			<Head>
				<title>خانه</title>
			</Head>
			<PortalProvider>
				<>
					<div className="pb-32">
						<EnterMobile />
					</div>
					<div className="min-h-screen pt-16 relative" id="receive-code">
						<EnterCode />
					</div>
					<div className="min-h-screen pt-16 relative" id="register-info">
						<EnterInformation />
					</div>
					<div className="min-h-screen pt-20" id="choose-template">
						<ChooseTemplate />
					</div>
					<div className="min-h-screen pt-20 relative" id="template-settings">
						<TemplateSettings />
					</div>
					<div className="min-h-screen pt-16" id="choose-domain">
						<EnterDomain />
					</div>
					<div className="min-h-screen pt-20 relative" id="payment-pannel">
						<PaymentPannel />
					</div>
					<div className="min-h-screen pt-20" id="payment">
						<Payment />
					</div>
				</>
			</PortalProvider>
		</>
	);
}
