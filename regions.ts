/*
    This script will export a default object containing
    a list of active Deno Deploy regions, sourced from
    https://deno.com/deploy/docs/regions and updated
    manually. Each region has a geographic name and a
    system name, the latter returned from the
    DENO_REGION environment variable on Deno Deploy.
*/

interface RegionObject {
    [key: string]: string;
  }

export default {
	"asia-east1": "Taiwan",
	"asia-east2": "Hong Kong",
	"asia-northeast1": "Tokyo",
	"asia-northeast2": "Osaka",
	"asia-northeast3": "Seoul",
	"asia-south1": "Mumbai",
	"asia-south2": "Delhi",
	"asia-southeast1": "Singapore",
	"asia-southeast2": "Jakarta",
	"australia-southeast1": "Sydney",
	"australia-southeast2": "Melbourne",
	"europe-central2": "Warsaw",
	"europe-north1": "Finland",
	"europe-west1": "Belgium",
	"europe-west2": "London",
	"europe-west3": "Frankfurt",
	"europe-west4": "Netherlands",
	"europe-west6": "Zurich",
	"europe-west8": "Milan",
	"europe-west9": "Paris",
	"me-west1": "Tel Aviv",
	"europe-southwest-1": "Madrid",
	"northamerica-northeast1": "Montréal",
	"northamerica-northeast2": "Toronto",
	"southamerica-east1": "São Paulo",
	"southamerica-west1": "Chile",
	"us-central1": "Iowa",
	"us-east1": "South Carolina",
	"us-east4": "North Virginia",
	"us-east5": "Ohio",
	"us-south1": "Texas",
	"us-west1": "Oregon",
	"us-west2": "California",
	"us-west3": "Utah",
	"us-west4": "Nevada",
} as RegionObject;