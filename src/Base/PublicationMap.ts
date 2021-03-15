import teshnizi2021TetheredPair from "../assets/teshnizi2021-tethered-pair.pdf";
import teshnizi2014Tethered from "../assets/teshnizi2014-tethered.pdf";
import teshnizi2014TetheredTechreport from "../assets/teshnizi2014-tethered-techreport.pdf";
import teshnizi2015Thesis from "../assets/teshnizi2015-thesis.pdf";
import teshnizi2016StiffTether from "../assets/teshnizi2016-stiff-tether.pdf";
import teshnizi2016TetheredPairsWorkshop from "../assets/teshnizi2016-tethered-pairs-workshop.pdf";

export const PublicationMap = {
	"teshnizi2014-tethered": teshnizi2014Tethered,
	"teshnizi2014-tethered-techreport": teshnizi2014TetheredTechreport,
	"teshnizi2015-thesis": teshnizi2015Thesis,
	"teshnizi2016-stiff-tether": teshnizi2016StiffTether,
	"teshnizi2016-tethered-pairs-workshop": teshnizi2016TetheredPairsWorkshop,
	"teshnizi2021-tethered-pair": teshnizi2021TetheredPair,
};

export type TexKey = keyof typeof PublicationMap;
