const SITE_URL = "https://globalemergencygroupllc.sharepoint.com/sites/Workspace";

const DB = {"regions":{"East Asia and the Pacific":["Australia","Brunei","Cambodia","China","Cook Islands","Fiji","Indonesia","Japan","Kiribati","Laos","Malaysia","Marshall Islands","Micronesia","Mongolia","Myanmar","Nauru","New Zealand","Niue","North Korea","Palau","Papua New Guinea","Samoa","Singapore","Solomon Islands","South Korea","Taiwan","Thailand","Timor-Leste","Tonga","Tuvalu","Vanuatu","Vietnam"],"Europe and Eurasia":["Albania","Andorra","Armenia","Austria","Azerbaijan","Belarus","Belgium","Bosnia and Herzegovina","Bulgaria","Croatia","Cyprus","Czech Republic","Denmark","Estonia","Finland","France","Georgia","Germany","Greece","Holy See","Hungary","Iceland","Ireland","Italy","Latvia","Liechtenstein","Lithuania","Luxembourg","Malta","Moldova","Monaco","Montenegro","Netherlands","North Macedonia","Norway","Poland","Portugal","Romania","Russia","San Marino","Serbia","Slovakia","Slovenia","Spain","Sweden","Switzerland","Turkey","Ukraine","United Kingdom"],"Near East (Middle East and Northern Africa)":["Algeria","Bahrain","Egypt","Iran","Iraq","Israel","Jordan","Kuwait","Lebanon","Libya","Morocco","Oman","Qatar","Saudi Arabia","State of Palestine","Syria","Tunisia","United Arab Emirates","Yemen"],"South and Central Asia":["Afghanistan","Bangladesh","Bhutan","India","Kazakhstan","Kyrgyzstan","Maldives","Nepal","Pakistan","Sri Lanka","Tajikistan","Turkmenistan","Uzbekistan"],"Sub-Saharan Africa":["Angola","Benin","Botswana","Burkina Faso","Burundi","Cabo Verde","Cameroon","Central African Republic","Chad","Comoros","Côte d'Ivoire","Democratic Republic of the Congo","Djibouti","Equatorial Guinea","Eritrea","Eswatini","Ethiopia","Gabon","Gambia","Ghana","Guinea","Guinea-Bissau","Kenya","Lesotho","Liberia","Madagascar","Malawi","Mali","Mauritania","Mauritius","Mozambique","Namibia","Niger","Nigeria","Republic of the Congo","Rwanda","Sao Tome and Principe","Senegal","Seychelles","Sierra Leone","Somalia","South Africa","South Sudan","Sudan","Tanzania","Togo","Uganda","Zambia","Zimbabwe"],"Western Hemisphere":["Antigua and Barbuda","Argentina","Barbados","Belize","Bolivia","Brazil","Canada","Chile","Colombia","Costa Rica","Cuba","Dominica","Dominican Republic","Ecuador","El Salvador","Grenada","Guatemala","Guyana","Haiti","Honduras","Jamaica","Mexico","Nicaragua","Panama","Paraguay","Peru","Philippines","Saint Kitts and Nevis","Saint Lucia","Saint Vincent and the Grenadines","Suriname","The Bahamas","Trinidad and Tobago","United States of America","Uruguay","Venezuela"]},"service_tree":{"Administration":{"Housing":[{"detail":"Cleaning","description":"Service to clean and maintain accomodation"},{"detail":"Corporate Accomodation","description":"Extended-stay accommodations for mission travelers or relocating employees."},{"detail":"Facility Management","description":"Maintenance and operation of buildings and infrastructure while in use."},{"detail":"Furnished Accomodation","description":"Fully equipped units for stays ranging from a few days to several months. No Services provided"},{"detail":"Hotel","description":"Hotel with no restaurant"},{"detail":"Hotel & Restaurant","description":"Hotel with restauration (breakfast, lunch and diner)"},{"detail":"Real Estate Agent","description":"Real estate brokers to advice,  research and propose temporary or more permanent rental"},{"detail":"Serviced Accomodation","description":"Accomodation fully equiped with housekeeping, utilities, and sometimes concierge services."},{"detail":"Tents, Rental","description":"Temporary rental of tent or shelter structures used for accommodation, offices, or operational spaces, typically deployed quickly for shortâterm housing, field operations, or emergency response."}],"HR, Compensation & Benefits":[{"detail":"Benefits Administration","description":"Managing health insurance, retirement plans, perks."},{"detail":"Payroll Processing","description":"Ensuring accurate and timely payment."},{"detail":"Salary Structuring","description":"Designing competitive pay scales."}],"HR, Compliance & Legal":[{"detail":"Labor Law Compliance","description":"Ensuring adherence to local/regional regulations."},{"detail":"Workersâ Compensation","description":"Managing claims and occupational health."},{"detail":"Workplace Policies","description":"Developing handbooks, codes of conduct, and safety protocols."}],"HR, Employee Relations":[{"detail":"Conflict Resolution","description":"Mediating disputes between staff or teams."},{"detail":"Grievance Handling","description":"Addressing employee complaints or concerns."},{"detail":"Workplace Culture","description":"Fostering engagement, diversity, and inclusion."}],"HR, Learning & Development":[{"detail":"Career Pathing","description":"Helping employees plan long-term growth within the company."},{"detail":"Leadership Development","description":"Coaching for managers and executives."},{"detail":"Training Programs","description":"Upskilling employees (technical, soft skills, compliance)."}],"HR, On-Offbording":[{"detail":"Exit Interviews & Offboarding","description":"Managing departures and collecting feedback."},{"detail":"Onboarding Programs","description":"Integrating new hires (training, documentation, culture fit)."}],"HR, Outsourced HR Services":[{"detail":"HR Consulting","description":"External expertise for specific projects or challenges."},{"detail":"PEO (Professional Employer Organization)","description":"Co-employment for SMEs."}],"HR, Performance Management":[{"detail":"360-Degree Feedback","description":"Multi-source evaluations for development."},{"detail":"Appraisals & Feedback","description":"Regular performance reviews and goal-setting."},{"detail":"Succession Planning","description":"Identifying and grooming future leaders."}],"HR, Recruitment and staffing":[{"detail":"Employer Branding","description":"Promoting the company as a desirable workplace."},{"detail":"Executive Search","description":"Headhunting for senior or specialized roles."},{"detail":"Talent Acquisition","description":"Sourcing, screening, and hiring candidates."},{"detail":"Temporary Staffing","description":"Providing contract or interim workers."}],"HR, Technology & Systems":[{"detail":"Analytics & Reporting","description":"Using data to inform HR strategies."},{"detail":"HR, Information Systems","description":"Digital tools for personel and data management."},{"detail":"Time & Attendance Tracking","description":"Monitoring work hours and leave."}],"HR, Wellbeing & Engagement":[{"detail":"Employee Assistance Programs (EAP)","description":"Mental health, counseling, or wellness initiatives."},{"detail":"Engagement Surveys","description":"Measuring morale and satisfaction."},{"detail":"Work-Life Balance Programs","description":"Flexible schedules, remote work policies."}],"HR, Workforce Planning":[{"detail":"Restructuring Support","description":"Managing layoffs, mergers, or organizational changes."},{"detail":"Talent Mapping","description":"Identifying skill gaps and future hiring needs."}],"Office, Co-Working":[{"detail":"Dedicated Desks","description":"Reserved desks in a shared office environment."},{"detail":"Open Co-Working","description":"Shared desks in a communal workspace (e.g., WeWork, Regus)."},{"detail":"Private Offices in Co-Working Hubs","description":"Enclosed offices within a co-working facility."}],"Office, Meeting & Conference Rooms":[{"detail":"Boardrooms","description":"Professional rooms equipped for executive meetings."},{"detail":"Hourly/Daily Meeting Rooms","description":"Bookable spaces for presentations, client meetings, or team workshops."}],"Office":[{"detail":"Office, Mobile","description":"Offices set up in vans or trailers for fieldwork."},{"detail":"On-Demand","description":"Spaces rented by the hour, day, or week (e.g., LiquidSpace)."},{"detail":"Prefab","description":"Portable, prefabricated units that can be set up quickly."},{"detail":"Fully furnished","description":"Ready-to-use offices with utilities, internet, and reception services."},{"detail":"Virtual","description":"Business address and mail handling, with optional access to physical space."},{"detail":"Short-Term Leases","description":"Offices available for rent on a monthly or quarterly basis."},{"detail":"Short-Term SubLet  Leases","description":"Renting unused office space directly from another business."},{"detail":"Tentes","description":"Tents that are specialised in office / living space, Generally Modular, with possible Aircon / Heating"},{"detail":"Furnitures","description":"Furnitures for office, table, chairs, whitboards, electric sockets, etcâ¦"},{"detail":"supplies","description":"All office supplies, paper, pens, Printer Ink, staplers â¦"},{"detail":"Electronics","description":"All electronics equipements/harware for an office, laptops, printer, wifi extenders etc..."},{"detail":"internet and networking","description":"Internets suppliers, and companies to setup networks, hot spots etc.."}],"Security, Cybersecurity":[{"detail":"Cyber ????","description":"nan"}],"Security, Electronic":[{"detail":"Electronic Access Control","description":"Keycards, fobs, or biometric systems for restricted areas."},{"detail":"Fire & Safety Systems","description":"Smoke detectors, fire alarms, and emergency evacuation planning."},{"detail":"Intrusion Detection","description":"Alarms, sensors, and motion detectors for unauthorized access."},{"detail":"Video Surveillance","description":"Installation of monitoring and security cameras."}],"Security, Physical":[{"detail":"Access Control","description":"Management of entry points (e.g., gates, turnstiles, biometric systems)."},{"detail":"Alarm Response","description":"Rapid reaction to triggered alarms (burglar, fire, panic)."},{"detail":"CCTV Monitoring","description":"Surveillance and real-time monitoring of premises via closed-circuit television."},{"detail":"Close protection","description":"Bodyguards for high-profile individuals or executives."},{"detail":"Event Security","description":"Crowd control, bag checks, and safety management at concerts, sports, or corporate events."},{"detail":"Manned Guarding","description":"Uniformed or plainclothes security officers for sites, events, or personal protection."},{"detail":"Mobile Patrols","description":"Security teams that monitor multiple locations using vehicles or bikes."}],"Security, Risks & Consulting":[{"detail":"Crisis Management","description":"Planning and response for emergencies (e.g., natural disasters, terrorism)."},{"detail":"Security Consulting","description":"Customized advice for businesses or individuals."},{"detail":"Threat Assessment","description":"Evaluating potential risks to people, assets, or operations."},{"detail":"Personnel tracking service","description":"Provide 24/7 survelliance of personnel mouvement via tracker technologies, with rescue support as necessary."}],"Security, Specialized":[{"detail":"Aviation Security","description":"Screening, cargo checks, and airport safety."},{"detail":"Corporate Investigations","description":"Fraud detection, due diligence, or internal probes."},{"detail":"Drone Security","description":"Counter-drone measures for unauthorized aerial threats."},{"detail":"Maritime Security","description":"Protection for ships, ports, and offshore facilities."}],"Visas processing":[{"detail":"Visa Processing","description":"Handles the administrative tasks of visa applications on behalf of client"}]},"Communication":{"Comms Equipment":[{"detail":"BroadBand interne","description":"Portable (BGAN) or stationary (VSAT), delivers high-speed internet access via satellites orbiting the Earth."},{"detail":"Emergency Mobile Network","description":"Deploy dedicated, resilient, and high-performance communication infrastructure to support first responders"},{"detail":"Radios (HF, VHF, UHF)","description":"Handeheld, mounted or stationnaryn VHF and UHF short- to medium-range HF long-distance"},{"detail":"Satelitte Phone","description":"satphone connects by radio link through satellites orbiting the Earth."},{"detail":"Wifi hotspots","description":"Rapid deploy temporary or emergency WiFi hotspots.(eg. Digital Avenue, Simpli-Fi, PopUpWiFi)"}],"Data Centers / LAN / WAN":[{"detail":"TO BE ADDED","description":"nan"}],"Tracking of Personnel":[{"detail":"GPS, RFID, Bluetooth trackers","description":"Use of technology to monitor the location, status, and safety of employees or team members in real time"}],"Translators":[{"detail":"Crisis/Conflict Zone Translation","description":"Supporting NGOs, journalists, or humanitarian efforts at field level."},{"detail":"Interpreting","description":"Oral Simultaneous, Consecutive or Liaison interpreting"},{"detail":"Sign Language Interpreting","description":"Translating between spoken language and sign language."},{"detail":"Sworn/Certified Translation","description":"Officially recognized translations for legal or immigration purposes."},{"detail":"Transcription + Translation","description":"Converting audio/video to text and translating it."},{"detail":"Written translation","description":"Translate text to a different language, may requiere specilized onterpretors for technical texts"}]},"Damage Assessment and Repair":{"Architectural and Engineering Services":[{"detail":"Civil Engineering","description":"Design and construction of infrastructure such as roads, bridges, dams, and water supply systems."},{"detail":"Construction Management","description":"Oversight of construction projects to ensure quality, timeliness, and budget compliance"},{"detail":"Electrical Engineering","description":"Planning and installation of electrical systems, lighting, and power distribution."},{"detail":"Environmental Engineering","description":"Solutions for waste management, pollution control, and environmental compliance."},{"detail":"Geotechnical Engineering","description":"Assessment of soil, rock, and underground conditions for construction projects."},{"detail":"Mechanical Engineering","description":"Design of Heating, Ventilation, and Air Conditioning systems, plumbing, and mechanical components for buildings and industrial facilities."},{"detail":"Structural Engineering","description":"Assess, Analysis and design of structures to ensure it's safety and durability."},{"detail":"Surveying & Mapping","description":"Land surveying, geospatial mapping, and GIS (Geographic Information Systems) services."},{"detail":"Transportation Engineering","description":"Design of transportation networks, including highways, railways, and airports."}],"General Construction":[{"detail":"Pre-Construction Work","description":"Site Preparation: Clearing, grading, and leveling the land.\nSurveying: Measuring and mapping the site.\nPermits and Approvals: Securing legal permissions and compliance with building codes."},{"detail":"Foundation Work","description":"Excavation: Digging trenches or pits for the foundation.\nFootings: Pouring concrete footings to support the structure.\nFoundation Walls: Building walls (e.g., poured concrete, block, or slab-on-grade)."},{"detail":"Structural Work","description":"Framing: Erecting the skeleton of the building (wood, steel, or concrete).\nRoofing: Installing roof trusses, decking, and weatherproofing.\nLoad-Bearing Walls: Constructing walls that support the buildingâs weight."},{"detail":"Exterior Work","description":"Masonry: Brick, stone, or block work for walls and facades.\nSiding/Cladding: Installing exterior finishes (e.g., vinyl, wood, metal, or stucco).\nWindows and Doors: Fitting and sealing openings."},{"detail":"Plumbing Work","description":"Installing pipes, fixtures, and water systems."},{"detail":"Electrical Work","description":"Distributing Wiring, outlets, switches, and lighting."},{"detail":"HVAC Work","description":"Heating, ventilation, and air conditioning systems."},{"detail":"Landscaping Work","description":"Outdoor features like gardens, pathways, and drainage."},{"detail":"Insulation Work","description":"Adding thermal or acoustic insulation."},{"detail":"Elevators/Escalators Work","description":"Installing vertical transportation systems (for multi-story buildings)."},{"detail":"Tools","description":"All workers tools, saw, drills that are used to carry out the works"}],"Salvage / Dewatering / Demolition / Cleanup":[{"detail":"TO BE ADDED","description":"nan"}]},"Environmental Response":{"HazMaterial, Removal, Treatment & Disposal":[{"detail":"Corrosive Substances (Class 8)","description":"Can burn skin, eyes, or corrode metals and other materials."},{"detail":"Explosives (Class 1)","description":"Risk of explosion or violent reaction."},{"detail":"Flammable Liquids (Class 3)","description":"Easily ignitable; can cause fires or explosions."},{"detail":"Flammable Solids (Class 4)","description":"Ignite easily and burn vigorously, Can ignite spontaneously in air, React with water to release flammable gases."},{"detail":"Gases (Class 2)","description":"Highly flammable; risk of fire or explosion., Can displace oxygen, causing asphyxiation, Poisonous if inhaled."},{"detail":"Miscellaneous Dangerous Goods (Class 9)","description":"Varied risks, including pollution, fire, or physical harm (hasbestos, lithium batteries â¦)"},{"detail":"Oxidizing Substances & Organic Peroxides (Class 5)","description":"Can cause or intensify fires by releasing oxygen, Unstable; can explode or burn violently."},{"detail":"Radioactive Materials (Class 7)","description":"Emits ionizing radiation; can cause cancer, burns, or genetic damage."},{"detail":"Toxic & Infectious Substances (Class 6)","description":"Poisonous if inhaled, swallowed, or absorbed through skin, Can cause disease or infection."},{"detail":"Mines and Explosive Ordnance Disposal (EOD)","description":"De-mining is the process of locating and removing landmines from an area to make the land safe for civilian use and development. Explosive Ordnance Disposal (EOD) is the technical procedure of safely locating, identifying, rendering safe, and disposing of all types of unexploded ordnance (UXO), which includes landmines, bombs, shells, grenades, and other explosive devices that failed to function as intended. Link to class 1 Azmat"}],"PPE, Personal Protective Equipment":[{"detail":"Biological Hazards","description":"To protect working on medical sites, or during pandemics"},{"detail":"Chemical Hazards","description":"To protect working on sites, where toxic, poisonous substances"},{"detail":"Electrical Hazards","description":"To protect against electrical shocks, on work site"},{"detail":"Physical Hazards","description":"To protect working on sites, warehouses etcâ¦"}],"Waste Removal":[{"detail":"Agricultural Waste Removal","description":"None Hazmat Waste generated from farming and agricultural activities"},{"detail":"Construction and Demolition (C&D) Waste Removal","description":"None Hazmat waste generated from construction, renovation, or demolition activities."},{"detail":"Disaster Debris Removal","description":"None Hazmat Cleanup after natural disasters (e.g., hurricanes, floods)."},{"detail":"Electronic Waste (E-Waste) Removal","description":"None Hazmat Discarded electronic devices and components."},{"detail":"Green Waste Removal","description":"None Hazmat  Organic waste from gardens, parks, and landscaping."},{"detail":"Industrial Waste Removal","description":"None Hazmat Waste generated by manufacturing, factories, and industrial processes."},{"detail":"Liquid Waste Removal","description":"None Hazmat Waste in liquid form, including wastewater and industrial liquids."},{"detail":"Marine Debris Removal","description":"None Hazmat Cleaning up waste from oceans, beaches, and waterways."},{"detail":"Municipal Solid Waste (MSW) Removal","description":"None Hazmat Everyday waste generated by households, businesses, and institutions."},{"detail":"Heavy Equipment Rental","description":"Rental of Large, powerful machines designed for demanding tasks on construction sites, including earthmoving, demolition, and lifting"}],"Tools and Equipments":[{"detail":"Compressors, air tools","description":"Heavy Compressor, blowers, High pressure washer tools"},{"detail":"Heavy Equipment","description":"Bulldozer, bucket loader, tilt trucks â¦ anything heavy"},{"detail":"Noise Reduction","description":"Equipment to reduce noise when doing works like accoustic barriers"},{"detail":"Cranes","description":"Anything that lift up which is not a forklift"},{"detail":"High Reach","description":"High Reach with a nacelle for workers to access above the ground locations"},{"detail":"Pumps, dewatering","description":"Pelican pumps, centrifuge pumps, for dewatering turbid water, not for drinking water"}]},"Logistics":{"Customs":[{"detail":"Import & Export Declarations","description":"Submission of full and simplified customs declarations for goods entering or leaving a country."},{"detail":"Tariff Classification & Duty Calculation","description":"Determination of the correct tariff codes (HS/HTS) for goods. Calculation of applicable duties, taxes, and fees based on product type, origin, and trade agreements"},{"detail":"Transit & Temporary Storage","description":"Management of goods in transit (T1, T2 or other documents depending region) or temporary storage facilities. Coordination with bonded warehouses and customs-approved premises"},{"detail":"Vehicle & Specialized Cargo Clearance","description":"Customs clearance for motor vehicles, oversized cargo, hazardous materials, and perishable goods. Coordination with ports, airports, and road transport hubs"}],"Fleet":[{"detail":"Fleet management","description":"Fleet management is the oversight of a companyâs vehicles to optimize efficiency, reduce costs, and ensure compliance. It includes maintenance, tracking, fuel management, and driver safety."},{"detail":"Fleet Maintenance","description":"Fleet maintenance is the regular upkeep and repair of a companyâs vehicles to ensure safety, reliability, and cost-efficiency. It includes scheduling servicing, tracking repairs, and preventing breakdowns. Providing, staffing, and equipping mobile or fixed workshops"}],"Warehousing":[{"detail":"3PL (Third-Party Logistics)","description":"Outsourcing warehousing and fulfillment to specialized providers for scalability and expertise."},{"detail":"Bonded Warehouse","description":"Bonded warehouses services for customs-controlled goods"},{"detail":"Cargo handling, transport and lifting","description":"Supply equipments to move and store cargo, forklift, rolling cage, truck pallets, racks, palettes etcâ¦"},{"detail":"Climate controlled","description":"Climate-controlled (refrigerated) warehouses for perishables, hazardous material storage."},{"detail":"General Storage","description":"Secure, organized storage for a wide variety of goods, from raw materials to finished products."},{"detail":"Kitting and assembly","description":"Bundling multiple items into ready-to-ship kits or assembling products as required."},{"detail":"On-Demand Warehousing","description":"Flexible, short-term storage solutions that allow  to rent space and services only when needed, reducing fixed costs"},{"detail":"Pick and Pack","description":"Collecting items from inventory and preparing them for shipment according to customer orders."},{"detail":"Regional Hub","description":"Prepare key equipment and stock at regional hub level to reduce delivery time to targeted countries."},{"detail":"Mobile storage Units","description":"MSU or Rubbhall is a portable storage solution designed for the efficient transport and accessibility of goods."}]},"Response Program":{"Center / Case Management":[{"detail":"TO BE ADDED","description":"nan"}]},"Response Services":{"Team Welfare":[{"detail":"Base Camp accomodation","description":"Deployable base camp, full service including meals, sanitation, with tents or containers, energy, water, staffâ¦"},{"detail":"Cattering","description":"Prepare meals on site or remotly and deliver"},{"detail":"Containered Accomodation","description":"Deploy containers with bedroom and bathroom included"}],"Medical Services":[{"detail":"Ambulance, Air, Fixed Wings","description":"Specially outfitted fixed-wing aircraft that transports injured or sick people in a medical emergency or over distances or terrain impractical for a conventional ground ambulance."},{"detail":"Ambulance, Air, Rotary Wings","description":"Specially outfitted Rotary-wing aircraft that transports injured or sick people in a medical emergency or over distances or terrain impractical for a conventional ground ambulance."},{"detail":"Ambulance, Ground","description":"An ambulance is a medically equipped vehicle used to transport patients to treatment facilities, such as hospitals"},{"detail":"Deployable Field Clinic","description":"Temporary health facility that is primarily focused on the care of outpatients."},{"detail":"Deployable Field Hospital","description":"Temporary hospital or mobile medical unit that takes care of casualties on-site before they can be safely transported to more permanent solution"},{"detail":"Deployable Medical Laboratory","description":"Known as a Mobile Laboratory or Rapid Response Mobile Laboratory (RRML), is a self-contained, modular, and rapidly deployable laboratory designed to provide diagnostic support in remote or resource-limited settings, often in response to emergencies like disease outbreaks"},{"detail":"Deployable Infectious Decontamination Unit","description":"Known as a decontamination unit or D-unit, is a specialized area or facility designed to safely remove contamination from individuals who have been exposed to infectious agents. This process ensures that individuals are no longer a source of infection and can safely return to their normal environment"},{"detail":"Deployable Infectious Medical Unit","description":"Deployable medical facility designed to quickly respond to outbreaks of infectious diseases. Equipped to handle diagnosis, treatment, isolation, and containment of patients, and designed to be  deployed to areas with limited or overwhelmed healthcare infrastructure."},{"detail":"Hospital (state or private)","description":"General hospital, which typically has an emergency department to treat urgent health problems ranging from fire and accident victims to a sudden illness"},{"detail":"MEDEVAC","description":"Timely and efficient movement and en route care provided by medical personnel to patients requiring evacuation or transport using medically equipped air ambulances, helicopters and other means of emergency transport including ground ambulance and maritime transfers."},{"detail":"Medical Laboratory (state or private)","description":"Medical of clinical laboratory perform tests out on clinical specimens to obtain information about the health of a patient to aid in diagnosis, treatment, and prevention of disease"},{"detail":"Mobile Clinic","description":"Flexible and viable options for treating isolated and vulnerable groups as well as to newly displaced populations."},{"detail":"Mobile Surgical Unit","description":"A self-contained, transportable facility that provides a sterile environment for performing surgical procedures outside of a traditional hospital setting. Often include an operating room, prep area, and other essential components for surgical intervention"},{"detail":"Organ donor Transplant","description":"Company that can provide Organs for transplant"}],"Energies":[{"detail":"Electric Generators","description":"An electromechanical device that converts mechanical energy to electrical energy for use in an external circuit."},{"detail":"Electric Generators Maintenance","description":"Companies providing service and maintenance for generators."},{"detail":"Fuel supplier, network","description":"Fuel suppliers, in a network (eg. SHELL, EXXON) are often responsible for the delivery and distribution of fuel (Gasoline, diesel, heating oil, natural gas, electricity, and other energy sources)."},{"detail":"Fuel Storage and Dispensing Equipment","description":"The equipment used to safely store and transfer fuel, primarily from tanks to vehicles. This includes the storage tanks themselves (both underground and aboveground), as well as the associated piping, pumps, dispensing units (nozzles, hoses), and safety mechanisms like overfill protection and leak detection systems"},{"detail":"Fuel station (Exisiting structure)","description":"Can be rented for sole usage. Also named petrol station, gas station, or filling station, is a facility where vehicles can purchase fuel and other related supplies."},{"detail":"Fuel Station, new, key in hand","description":"Supply and install a new private fuel station, ready to be operated"},{"detail":"Battery Energy Storage Systems (BESS)","description":"devices that enable the storage of electrical energy using batteries, larger than UPS and power banks"}],"Environmental":[{"detail":"Cleaning, air","description":"Equipment to clean air by filtration, remove pollution like dust or micro particles to make the air a higher quality"},{"detail":"Decontamination","description":"Rapid deployment services that remove hazardous or harmful contaminants from people and equipment during emergencies, ensuring safe conditions and reducing exposure risks."},{"detail":"Heating","description":"Canon heaters to warm up a room, a hall using electricity or fuel source, boilers to warm water using electricity, fuel, gas, wood"},{"detail":"Cooling","description":"Mobile and fix airconditioning unit, supply, maintain or repairs"},{"detail":"Vacuum","description":"From hom to industrial Vacuum system, includes vacuum trucks to suck out debris in large quantities"},{"detail":"Sweepers","description":"Mechanical Sweepers to clean hard floors (concrete slab, roads, side ways), could be hand powered, mounted in front of a vehicle or a full street sweeper"}],"Sanitation":[{"detail":"Bowser trucks","description":"Truck Adapted to carry potable water in large quantity, generally comes with its own pump to push water up to storage tanks"},{"detail":"Water storage","description":"Water starage for potable water, can be few liters to hundreds of cubic meters"},{"detail":"Portable Toilets","description":"Also known Temporary event toilets, porta-potties, or port-a-johns are self-contained units used for events where permanent restroom facilities are unavailable or insufficient. These toilets are designed for easy transport, setup, and use, offering a convenient solution for managing sanitation needs at various events.Â Supplier must provide the disposal of waste."},{"detail":"Pumps","description":"Water pumps for potable water system, may includes a pressure sensor to start and boost water pressure when a tap is opened"},{"detail":"Pressure Washing","description":"Pressure Washer, for personnal use or industriel for program use. May have heater to create steam for biomedical cleaning like Ebola"},{"detail":"Water production","description":"Produce potable water from different sources of unclean water, includes desalination"},{"detail":"Water distribution","description":"Install water distribution system for support or program"},{"detail":"Water treament","description":"Treat grey water to either reuse or dispose in a safe way"}]},"Supplies":{"Critical Supplies":[{"detail":"TO BE ADDED","description":"???"}],"Electronic Equipment":[{"detail":"Battery backups","description":"Allows to supply backup power to electrical devices, household appliances, and more, providing a great energy source for emergency power outages and off-grid travel."},{"detail":"Power Bank","description":"Device that stores electric energy to charge gadgets such as your smartphones, laptops, tablets, and more. It's an energy source that can be taken on the go."}],"Subsistance":[{"detail":"Meals Ready to Eat, MRE","description":"Pre cooked and vacuum sealed wet meals that simply need heating in boiling water, empty into a pan over a source of energy or \"cracked\" to generate a chimical reaction and heat."},{"detail":"Water filter","description":"A device that removes impurities and contaminants from water, making it cleaner and safer for drinking or other uses. It works by using a physical barrier, chemical process, or biological process to trap or remove unwanted substances."}],"Medical Supplies":[{"detail":"TBAdded","description":"nan"}],"Money":[{"detail":"Money transfer","description":"nan"},{"detail":"Card payement","description":"nan"}],"Non-critical Supplies":[{"detail":"TBAdded","description":"???"}]},"Transportation":{"Evacuation / Extraction":[{"detail":"Evacuation Services for Personnel","description":"Offers medical, security, and field rescue evacuation services worldwide, including for natural disasters, medical emergencies, and security threats."},{"detail":"Extraction Services for Personnel","description":"Conducts extraction missions for personnel in conflict zones or high-risk environments, coordinating with local teams and using ex-military professionals for safe extraction"}],"Transport, Freight":[{"detail":"Airfreight, fixed wings","description":"Typicaly aircraft, Transportation of goods by air, ideal for urgent, high-value, or perishable cargo."},{"detail":"Airfreight, Rotary wings","description":"Typicaly Helicopteres, Transportation of goods by air, ideal for urgent, high-value, or perishable cargo."},{"detail":"Airfreight, Drone","description":"Drone freight Carrier, anytypes"},{"detail":"Courier and Parcel Services","description":"Small-scale, fast delivery of parcels and documents, typically for e-commerce or business needs."},{"detail":"Dangerous Goods (Hazmat) Transportation","description":"Regulated movement of substances classified as hazardous due to their potential risks to health, safety, property, or the environment"},{"detail":"Livestock and Animal Transport","description":"Moving animals for agriculture or trade under strict welfare regulations, using road, rail, or air, while addressing challenges like stress, disease control, and ethical concerns."},{"detail":"Oversize/Heavy Haul","description":"Specialized movement of loads that exceed standard legal weight or dimensional limits for roads, bridges, or other infrastructure."},{"detail":"Rail Freight","description":"Transportation of goods by train, ideal for long-distance, heavy, or bulk cargo."},{"detail":"Road Freight (Trucking)","description":"Transportation of goods by trucks or lorries, primarily for domestic or regional distribution."},{"detail":"Seafreight (Ocean Freight)","description":"Transportation of goods by cargo ships, ideal for large, heavy, or non-urgent shipments."},{"detail":"Temperature-Controlled Freight (Cold Chain)","description":"Temperature-Controlled Freight (Cold Chain) refers to the transportation and storage of goods that require specific temperature conditions to maintain quality, safety, and efficacy."},{"detail":"Last Mile Delivery","description":"Transportation of goods for distribution even in hard to reach location."}],"Transport, Personnel":[{"detail":"Air, Fixed wings","description":"From Cesna to A380"},{"detail":"Air, Rotary wings","description":"From Robin to MI-26"},{"detail":"Armored Vehicles","description":"Specially designed or modified vehicles equipped with ballistic protection to safeguard occupants from threats such as gunfire, explosions, kidnapping, or ambushes."},{"detail":"Boat and Ferries","description":"Carry personnel and may or not carry vehicles and cargo, speed varies. May provide a cabine with bed and shower and catering."},{"detail":"Bus","description":"From 9 Seaters to about 100 seats"},{"detail":"Car rental","description":"Car rental service, self driving"},{"detail":"Car rental with chauffeur","description":"Car rental service, with chauffeur/driver"},{"detail":"Moppet and Motorbike rental","description":"To be used for national staff generally"},{"detail":"Pack annimals","description":"Domesticated animals used to carry goods and supplies, often over difficult terrain"},{"detail":"Taxi","description":"Taxis & Uber like service"},{"detail":"Train","description":"Railway service"}]},"Population response":{"Rapide Deployment Shelter":[{"detail":"Habitation Tents, Metal Structure","description":"Type of modular, portable structure designed for quick assembly and disassembly, made of a metal structure. Can be provided with hot or cold climat kit. Size from one person to 100's."},{"detail":"Habitation Tents, Inflatable","description":"Type of modular, portable structure designed for quick assembly and disassembly, made of an inflatbale structure. Can be provided with hot or cold climat kit. Size from one person to 100's."}],"Prefab / Kit House":[{"detail":"Prefab house","description":"Prefabricated house (or prefab) is a building constructed from components or modules that are manufactured off-site in a factory, then transported and rapidly assembled on a foundation at the final building location. This method, often associated with modular construction or rapid deployment shelters , allows for quicker assembly and is common for everything from residential homes to temporary field clinics"},{"detail":"Kit House","description":"A house in kit, or a kit home, is a type of prefabricated house where all the necessary components for building the dwelling are delivered to the construction site in a single, pre-packaged bundle. Unlike fully assembled modular homes, a kit house typically requires the owner or a contractor to assemble the house from the ground up using detailed, numbered instructions. The kit usually includes the structural framing, roofing, exterior cladding, windows, doors, and sometimes interior finishes. This method is often chosen for its relative affordability and simplified logistics, as all materials are delivered at once."},{"detail":"Container house","description":"Container house is a type of prefabricated dwelling built by modifying and repurposing the sturdy steel frames of standard intermodal shipping containers (typically 20-foot or 40-foot units). The process involves cutting openings for doors and windows, adding insulation, and connecting multiple containers to create a rapid, durable, and highly transportable home or specialized facility, such as the \"Containered Accomodation\" used in field operations."}],"None Food Item NFI":[{"detail":"Bed Linen","description":"Sheets, pillowcases, or covers provided for cleanliness and comfort in temporary shelters or hospitals that cover the matress."},{"detail":"Beds","description":"Portable or foldable frames (e.g., camp cots) provided for elevated, comfortable sleeping in shelters."},{"detail":"Blanket, Emergency","description":"Refers to lightweight, portable, and heat-reflective blankets designed to provide warmth and protection in emergency situations. They are often made from a thin sheet of plastic (like Mylar) coated with a metallic surface (like aluminum) to reflect body heat back to the user."},{"detail":"Blankets","description":"Insulated fabric coverings (often thermal or wool) distributed to provide warmth and protection from cold, especially in displacement or disaster settings."},{"detail":"Buckets","description":"Multi-purpose plastic containers used for collecting, storing, or carrying water, as well as for hygiene or sanitation needs."},{"detail":"Collapsible Jerrycan","description":"Foldable, lightweight plastic containers (typically 10â20 liters) for easy transport and storage of water in emergencies."},{"detail":"Dignity kit","description":"A dignity kit is a collection of personal hygiene and sanitary items distributed to women and girls, especially during a humanitarian crisis, to help them manage their menstrual and hygiene needs with dignity. These kits go beyond basic hygiene and often include items for safety and empowerment, such as flashlights, soap, and information on sexual and reproductive health services."},{"detail":"Heater","description":"Portable heating devices (e.g., gas, electric, or kerosene heaters) provided to warm shelters or tents in freezing conditions."},{"detail":"Hygiene Kits","description":"Pre-packaged sets containing essentials like soap, toothbrushes, sanitary pads, towels, and sometimes disinfectants to maintain personal hygiene and prevent disease."},{"detail":"Kitchen Sets","description":"Bundles of basic cooking utensils (e.g., pots, pans, plates, cups, and cutlery) for families to prepare and eat meals in displacement settings. Must be adapted to culture (E.G. Woke in Asia)"},{"detail":"Mattress","description":"Padded sleeping surfaces (e.g., inflatable or foam) for comfort and insulation from the ground in shelters or tents."},{"detail":"Pillow","description":"Soft cushions for head support during sleep, sometimes included in bedding kits."},{"detail":"Sleeping Bag","description":"Insulated, portable bags designed to retain body heat and provide warmth during sleep, especially in cold climates."},{"detail":"Sleeping mats","description":"Lightweight, insulated mats (e.g., foam or inflatable) placed under sleeping bags or blankets to provide insulation from cold ground and improve comfort."},{"detail":"Solar products","description":"Solar-powered items (e.g., lanterns, chargers, or lights) used to provide lighting and charge devices in off-grid or disaster-affected areas."},{"detail":"Tarpaulins","description":"Waterproof sheets made of durable material (e.g., polyethylene or canvas) used to create temporary shelters, cover damaged roofs, or protect goods from rain and wind."},{"detail":"Thermos","description":"Insulated containers used to keep liquids (e.g., water, soup) hot or cold for extended periods, useful in food distribution or cold climates."},{"detail":"Towel","description":"Absorbent fabric used for drying hands, body, or dishes, often included in hygiene kits."},{"detail":"Water containers","description":"Durable, food-grade containers (e.g., plastic jerrycans or buckets) used to store and transport clean drinking water."},{"detail":"Water purifiers","description":"Devices (e.g., filters, tablets, or UV purifiers) used to remove contaminants and pathogens from water, making it safe to drink."},{"detail":"Winterization kits","description":"Bundles of items (e.g., thermal blankets, warm clothing, insulated tarps, heaters) designed to help vulnerable populations survive cold weather."}],"Construction tools & materials":[{"detail":"Supplies for constructions","description":"Supplies to build like , Concert, Cement & Masonry , Lumber & Composites, Plyboard timbers, Roofing & Guttering, Steel Products ribars, drywalls."},{"detail":"Tools for construction","description":"Tools to distributs for the population to use to repair or buid there house/building. Showels, grout, hammer, water level"}],"Food Item":[{"detail":"Meal Ready to Eat MRE","description":"selfâcontained, shelfâstable meal designed to provide complete nutrition without cooking, commonly used by military personnel and emergency responders."},{"detail":"Mobile Kitchen","description":"for emergency response is a transportable foodâproduction unit that can rapidly prepare and serve hot meals in disaster or crisis situations where local infrastructure is unavailable."}]},"Information and Communication Technology":{"Connectivity":[{"detail":"Internet Access Solutions","description":"provision of technical systems and services that enable reliable access to the internet, allowing users, organizations, or communities to connect, communicate, and exchange data digitally"},{"detail":"Wireless Network Deployment","description":"planning, installation, and configuration of wireless communication infrastructure that enables devices and users to connect and exchange data without physical cabling."}],"Power Systems":[{"detail":"SolarâPowered ICT Systems","description":"use of solar energy solutions to reliably power ICT equipment and connectivity infrastructure, especially in offâgrid or lowâresource environments."}],"Equipment":[{"detail":"LowâPower Computing Hardware","description":"computing devices designed to operate efficiently with minimal electricity consumption while delivering essential digital computing functions."}],"Services":[{"detail":"ICT System Design and Integration","description":"the endâtoâend design, configuration, and integration of hardware, software, power, and connectivity components into a functional ICT solution."},{"detail":"Training and Capacity Building","description":"the provision of skills transfer, education, and technical training that enables individuals or organizations to effectively operate, maintain, and manage ICT systems."}]}},"suppliers":[]};

// Build lookups
const allSuppliers = DB.suppliers.filter(s => s.CompanyName && s.CompanyName.trim());
const regions = DB.Regions;
const serviceTree = DB.service_tree;
const allRegions = Object.keys(regions);
const allServiceGroups = Object.keys(serviceTree);

// Get all unique HQ countries
const hqCountries = [...new Set(allSuppliers.map(s=>s.CountryLocation).filter(Boolean))].sort();

// Get all countries across all service areas
const allCountries = [...new Set(
  allRegions.flatMap(r => regions[r])
)].sort();

let activeFilters = {
  search:'', regions:new Set(), countries:new Set(), svcGroups:new Set(),
  vetted:false, used:false, nda:false, teaming:false,
  hqCountries:new Set()
};
let activeId = null;

// --- BUILD SIDEBAR FILTERS ---
function buildCheckList(container, items, filterKey, isSet=true) {
  items.forEach(item => {
    const label = document.createElement('label');
    label.className = 'check-item';
    const inp = document.createElement('input');
    inp.type = 'checkbox';
    inp.value = item;
    inp.addEventListener('change', () => {
      if(isSet) {
        if(inp.checked) activeFilters[filterKey].add(item);
        else activeFilters[filterKey].delete(item);
      } else {
        activeFilters[filterKey] = inp.checked;
      }
      applyFilters();
    });
    label.appendChild(inp);
    label.appendChild(document.createTextNode(' ' + item));
    container.appendChild(label);
  });
}

buildCheckList(document.getElementById('region-list'), allRegions, 'regions');
buildCheckList(document.getElementById('country-list'), allCountries, 'countries');
buildCheckList(document.getElementById('svcgrp-list'), allServiceGroups, 'svcGroups');

// HQ country list
buildCheckList(document.getElementById('hq-list'), hqCountries, 'hqCountries');

// Country search filter
document.getElementById('country-search').addEventListener('input', function() {
  const q = this.value.toLowerCase();
  document.querySelectorAll('#country-list .check-item').forEach(el => {
    el.style.display = el.textContent.toLowerCase().includes(q) ? '' : 'none';
  });
});

// HQ country filter
document.getElementById('hq-search').addEventListener('input', function() {
  const q = this.value.toLowerCase();
  document.querySelectorAll('#hq-list .check-item').forEach(el => {
    el.style.display = el.textContent.toLowerCase().includes(q) ? '' : 'none';
  });
});

// Status checkboxes
['vetted','used','nda','teaming'].forEach(key => {
  document.getElementById('chk-'+key).addEventListener('change', function() {
    activeFilters[key] = this.checked;
    applyFilters();
  });
});

document.getElementById('search').addEventListener('input', function() {
  activeFilters.search = this.value.toLowerCase();
  applyFilters();
});

document.getElementById('sort-sel').addEventListener('change', applyFilters);

document.getElementById('clear-filters').addEventListener('click', () => {
  activeFilters = {search:'',regions:new Set(),countries:new Set(),svcGroups:new Set(),
    vetted:false,used:false,nda:false,teaming:false,hqCountries:new Set()};
  document.getElementById('search').value='';
  document.getElementById('country-search').value='';
  document.getElementById('hq-search').value='';
  document.querySelectorAll('.check-item input[type=checkbox]').forEach(c=>c.checked=false);
  document.querySelectorAll('#country-list .check-item, #hq-list .check-item').forEach(el=>el.style.display='');
  applyFilters();
});

// --- FILTERING ---
function matchesSupplier(s) {
  if(activeFilters.search) {
    const hay = [s.CompanyName,s.Description,s.service_categories,s.Region,s.CountryLocation,s.service_areas].join(' ').toLowerCase();
    if(!hay.includes(activeFilters.search)) return false;
  }
  if(activeFilters.Regions.size > 0) {
    const supRegions = [s.Region, s.Region_details].join(',');
    const match = [...activeFilters.Regions].some(r => supRegions.includes(r));
    if(!match) return false;
  }
  if(activeFilters.countries.size > 0) {
    const areas = (s.service_areas||'').toLowerCase();
    const rdet = (s.Region_details||'').toLowerCase();
    const match = [...activeFilters.countries].some(c => areas.includes(c.toLowerCase()) || rdet.includes(c.toLowerCase()));
    if(!match) return false;
  }
  if(activeFilters.svcGroups.size > 0) {
    const cats = (s.service_categories||'').toLowerCase();
    const match = [...activeFilters.svcGroups].some(g => cats.includes(g.toLowerCase()));
    if(!match) return false;
  }
  if(activeFilters.Vetted && !s.Vetted) return false;
  if(activeFilters.used && !s.previously_used) return false;
  if(activeFilters.nda && !s.nda) return false;
  if(activeFilters.teaming && !s.teaming_agreement) return false;
  if(activeFilters.hqCountries.size > 0) {
    if(!activeFilters.hqCountries.has(s.CountryLocation)) return false;
  }
  return true;
}

function sortSuppliers(arr) {
  const mode = document.getElementById('sort-sel').value;
  return [...arr].sort((a,b) => {
    if(mode==='name') return (a.CompanyName||'').localeCompare(b.CompanyName||'');
    if(mode==='region') return (a.Region||'').localeCompare(b.Region||'');
    if(mode==='priority') return (b.Priority||0)-(a.Priority||0);
    if(mode==='vetted') return (b.Vetted?1:0)-(a.Vetted?1:0);
    return (a.id||0)-(b.id||0);
  });
}

function stars(n) {
  if(!n) return '—';
  n = parseInt(n)||0;
  return '★'.repeat(Math.min(n,5))+'☆'.repeat(Math.max(0,5-n));
}

function bool(v) {
  return v ? '<span class="bool-icon bool-yes">✓</span>' : '<span class="bool-icon bool-no">✗</span>';
}

function esc(s) {
  return (s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

function applyFilters() {
  const filtered = sortSuppliers(allSuppliers.filter(matchesSupplier));
  renderList(filtered);
  document.getElementById('result-count').textContent = filtered.length + ' of ' + allSuppliers.length + ' suppliers';
  document.getElementById('stat-filtered').textContent = filtered.length;
}

// --- RENDER LIST ---
function renderList(suppliers) {
  const panel = document.getElementById('list-panel');
  if(suppliers.length === 0) {
    panel.innerHTML = '<div class="no-results">No suppliers match your filters.</div>';
    return;
  }
  panel.innerHTML = suppliers.map(s => {
    const cats = (s.service_categories||'').split(',').slice(0,3).map(c=>c.trim()).filter(Boolean).join(', ');
    const prio = s.Priority ? ' &nbsp;<span class="badge badge-priority">P'+s.Priority+'</span>' : '';
    return `<div class="sup-card${activeId===s.id?' active':''}" data-id="${s.id}">
      <div class="sup-name">${esc(s.CompanyName)}</div>
      <div class="sup-meta">
        ${s.Region?`<span class="badge badge-region">${esc(s.Region)}</span>`:''}
        ${s.Vetted?'<span class="badge badge-vetted">✓ Vetted</span>':''}
        ${s.previously_used?'<span class="badge badge-used">Used</span>':''}
        ${prio}
      </div>
      <div class="sup-cats">${esc(cats) || 'No categories'}</div>
    </div>`;
  }).join('');

  panel.querySelectorAll('.sup-card').forEach(card => {
    card.addEventListener('click', () => {
      const id = card.dataset.id;
      const idNum = isNaN(id) ? id : (parseInt(id)||id);
      const s = allSuppliers.find(x => x.id == idNum || x.id === id);
      if(s) showDetail(s);
    });
  });
}

// --- RENDER DETAIL ---
function showDetail(s) {
  activeId = s.id;
  document.querySelectorAll('.sup-card').forEach(c => {
    c.classList.toggle('active', c.dataset.id == s.id);
  });

  const cats = (s.service_categories||'').split(',').map(c=>c.trim()).filter(Boolean);
  const areas = (s.service_areas||'').split(',').map(c=>c.trim()).filter(Boolean);

  const detail = document.getElementById('detail-panel');
  detail.innerHTML = `
    <div class="detail-header">
      <div class="detail-company">${esc(s.CompanyName)}</div>
      <div class="detail-tags">
        ${s.Region?`<span class="detail-tag">${esc(s.Region)}</span>`:''}
        ${s.CountryLocation?`<span class="detail-tag">HQ: ${esc(s.CountryLocation)}</span>`:''}
        ${s.Vetted?'<span class="detail-tag">✓ Vetted</span>':''}
        ${s.previously_used?'<span class="detail-tag">Used Before</span>':''}
        ${s.Priority?`<span class="detail-tag">Priority: ${stars(s.Priority)}</span>`:''}
      </div>
    </div>
    <div class="detail-body">

      ${s.Description?`
      <div class="section-card">
        <div class="section-card-header">Description of Services</div>
        <div class="section-card-body"><p class="desc-text">${esc(s.Description)}</p></div>
      </div>`:''}

      <div class="section-card">
        <div class="section-card-header">Contact & Links</div>
        <div class="section-card-body">
          <div class="info-grid">
            ${s.email?`<div class="info-item"><label>Email</label><p class="desc-text" style="font-size:.78rem">${esc(s.email)}</p></div>`:''}
            ${s.phone?`<div class="info-item"><label>Phone</label><p class="desc-text" style="font-size:.78rem">${esc(s.phone)}</p></div>`:''}
            ${s.url?`<div class="info-item"><label>Website</label><p><a href="${esc(s.url)}" target="_blank">${esc(s.url)}</a></p></div>`:''}
            ${s.contacts?`<div class="info-item"><label>Contacts</label><p class="desc-text" style="font-size:.78rem">${esc(s.contacts)}</p></div>`:''}
            ${s.cities?`<div class="info-item" style="grid-column:1/-1"><label>Offices / Cities</label><p class="desc-text" style="font-size:.78rem">${esc(s.cities)}</p></div>`:''}
          </div>
        </div>
      </div>

      <div class="section-card">
        <div class="section-card-header">Geographic Coverage</div>
        <div class="section-card-body">
          <div class="info-grid">
            <div class="info-item"><label>HQ Country</label><p>${esc(s.CountryLocation)||'—'}</p></div>
            <div class="info-item"><label>Primary Region</label><p>${esc(s.Region)||'—'}</p></div>
            ${s.Region_details?`<div class="info-item" style="grid-column:1/-1"><label>Regions Covered</label><p>${esc(s.Region_details)}</p></div>`:''}
          </div>
          ${areas.length?`<div style="margin-top:.75rem"><div style="font-size:.68rem;color:#6b7280;text-transform:uppercase;letter-spacing:.6px;margin-bottom:.4rem">Countries of Operation</div><div class="countries-text">${areas.join(', ')}</div></div>`:''}
        </div>
      </div>

      ${cats.length?`
      <div class="section-card">
        <div class="section-card-header">Service Categories</div>
        <div class="section-card-body">
          <div class="cats-list">${cats.map(c=>`<span class="cat-badge">${esc(c)}</span>`).join('')}</div>
          ${s.service_type?`<div style="margin-top:.6rem;font-size:.8rem;color:#374151"><b>Type:</b> ${esc(s.service_type)}</div>`:''}
        </div>
      </div>`:''}

      <div class="section-card">
        <div class="section-card-header">Status & Agreements</div>
        <div class="section-card-body">
          <div class="info-grid">
            <div class="info-item"><label>Vetted</label><p>${bool(s.Vetted)} ${s.vetting_date?'('+esc(s.vetting_date)+')':''}</p></div>
            <div class="info-item"><label>Previously Used</label><p>${bool(s.previously_used)}</p></div>
            <div class="info-item"><label>NDA</label><p>${bool(s.nda)}</p></div>
            <div class="info-item"><label>Teaming Agreement</label><p>${bool(s.teaming_agreement)}</p></div>
            <div class="info-item"><label>Pursue Teaming</label><p>${bool(s.pursue_teaming)}</p></div>
            <div class="info-item"><label>Priority</label><p class="priority-stars">${stars(s.Priority)} ${s.Priority?'('+s.Priority+'/5)':''}</p></div>
            ${s.last_contact?`<div class="info-item"><label>Last Contact</label><p>${esc(s.last_contact)}</p></div>`:''}
            ${s.other_agreements?`<div class="info-item" style="grid-column:1/-1"><label>Other Agreements</label><p>${esc(s.other_agreements)}</p></div>`:''}
          </div>
          ${s.previous_locations?`<div style="margin-top:.6rem"><label class="info-item" style="display:block;font-size:.68rem;color:#6b7280;text-transform:uppercase;letter-spacing:.6px;margin-bottom:.2rem">Previous Locations Used</label><p style="font-size:.8rem">${esc(s.previous_locations)}</p></div>`:''}
          ${s.clients?`<div style="margin-top:.6rem"><label class="info-item" style="display:block;font-size:.68rem;color:#6b7280;text-transform:uppercase;letter-spacing:.6px;margin-bottom:.2rem">Clients Used With</label><p style="font-size:.8rem">${esc(s.clients)}</p></div>`:''}
        </div>
      </div>

      ${(s.quality_frameworks||s.env_social)?`
      <div class="section-card">
        <div class="section-card-header">Quality & Environmental Frameworks</div>
        <div class="section-card-body">
          <div class="info-grid">
            ${s.quality_frameworks?`<div class="info-item" style="grid-column:1/-1"><label>Quality Frameworks</label><p class="desc-text" style="font-size:.78rem">${esc(s.quality_frameworks)}</p></div>`:''}
            ${s.env_social?`<div class="info-item" style="grid-column:1/-1"><label>Environmental / Social</label><p class="desc-text" style="font-size:.78rem">${esc(s.env_social)}</p></div>`:''}
          </div>
        </div>
      </div>`:''}

      ${(s.feedback||s.evaluation||s.reaction_time||s.notes)?`
      <div class="section-card">
        <div class="section-card-header">Performance & Notes</div>
        <div class="section-card-body">
          ${s.feedback?`<div style="margin-bottom:.6rem"><label style="display:block;font-size:.68rem;color:#6b7280;text-transform:uppercase;letter-spacing:.6px;margin-bottom:.2rem">Feedback</label><p class="desc-text" style="font-size:.8rem">${esc(s.feedback)}</p></div>`:''}
          ${s.evaluation?`<div style="margin-bottom:.6rem"><label style="display:block;font-size:.68rem;color:#6b7280;text-transform:uppercase;letter-spacing:.6px;margin-bottom:.2rem">Evaluation</label><p class="desc-text" style="font-size:.8rem">${esc(s.evaluation)}</p></div>`:''}
          ${s.reaction_time?`<div style="margin-bottom:.6rem"><label style="display:block;font-size:.68rem;color:#6b7280;text-transform:uppercase;letter-spacing:.6px;margin-bottom:.2rem">Reaction Time</label><p style="font-size:.8rem">${esc(s.reaction_time)}</p></div>`:''}
          ${s.notes?`<div style="margin-bottom:.6rem"><label style="display:block;font-size:.68rem;color:#6b7280;text-transform:uppercase;letter-spacing:.6px;margin-bottom:.2rem">Notes</label><p class="desc-text" style="font-size:.8rem">${esc(s.notes)}</p></div>`:''}
          ${s.restrictions?`<div><label style="display:block;font-size:.68rem;color:#6b7280;text-transform:uppercase;letter-spacing:.6px;margin-bottom:.2rem">Restrictions</label><p class="desc-text" style="font-size:.8rem">${esc(s.restrictions)}</p></div>`:''}
        </div>
      </div>`:''}

    </div>`;
}

// --- INIT ---
function init() {
  const total = allSuppliers.length;
  const vetted = allSuppliers.filter(s=>s.Vetted).length;
  const used = allSuppliers.filter(s=>s.previously_used).length;
  document.getElementById('stat-total').textContent = total;
  document.getElementById('stat-vetted').textContent = vetted;
  document.getElementById('stat-used').textContent = used;
  applyFilters();
}

init();

async function loadSuppliersFromSharePoint() {

    try {

        const endpoint =
            `${SITE_URL}/_api/web/lists/getbytitle('Suppliers')/items`;

        const response = await fetch(endpoint, {
            method: 'GET',
            headers: {
                'Accept': 'application/json;odata=verbose'
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        const data = await response.json();

        DB.suppliers = data.d.results;

        console.log("Loaded suppliers:", DB.suppliers);

        loadSuppliersFromSharePoint();

    } catch (error) {

        console.error("SharePoint loading error:", error);

    }
}

