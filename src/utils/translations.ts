import { Lang } from '../types'
type D = Record<string, string>
export const LANGS: { code: Lang; label: string }[] = [
  { code: 'ta', label: 'தமிழ்' }, { code: 'hi', label: 'हिंदी' }, { code: 'en', label: 'English' },
  { code: 'te', label: 'తెలుగు' }, { code: 'ml', label: 'മലയാളം' }, { code: 'kn', label: 'ಕನ್ನಡ' },
]
const en: D = {
  hello: 'Hello 👋', hereHelp: "I'm here to help you.", whatNeed: 'What do you need help with?', speak: 'Speak', type: 'Type',
  ph: 'Tell me what you need…', listening: 'Listening…', youSaid: 'You said:', send: 'Send', edit: 'Edit', tryAgain: 'Try again',
  typeInstead: 'Type instead', listen: 'Listen', dontUnderstand: "I don't understand", back: 'Back', okHelp: 'OK 👍 I will help you.', ok: 'OK 👍',
  qSkill: 'What kind of training do you want? For example: tailoring, computer or beauty.', qAge: 'How old are you?', qDistrict: 'Which district do you live in?',
  ageLow: 'This training is for age 18 and above. Please tell your age again.', found: 'I found a suitable training for you.',
  titleCard: 'Training for you', eligTitle: 'What you should know', minAge: 'Age {n} or above', docsTitle: 'Documents needed', months: '{n} months', fee: 'Demo: Free',
  askNext: 'Shall I tell you the next step?', yes: 'Yes', other: 'Find another training', next: 'Next', stepOf: 'Step {a} / {b}',
  s1: 'Keep your Aadhaar card ready.', s2: 'Keep your mobile number ready.', s3: 'Now we will open the registration form.', s4: 'Check your details and press Submit.',
  s1s: 'Aadhaar is your identity card. Take it in your hand.', s2s: 'Keep your phone with you. You will need to type its number.',
  s3s: 'A form is a page where you write your name and details. We will show it now.', s4s: 'Look at what you wrote. If it is right, press the Submit button.',
  openForm: 'Open demo form', demoReg: 'DEMO REGISTRATION — No real application will be submitted.', lName: 'Your name', lAge: 'Age', lMobile: 'Mobile number',
  lDistrict: 'District', lTraining: 'Training', submit: 'Submit', fillAll: 'Please enter your name and a 10-digit mobile number.',
  regDone: 'Registration Guidance Complete', regDoneSub: 'Your information has been prepared successfully.',
  regNext: 'Next step: Visit the official service provider to complete the real registration.', openOfficial: 'Open Official Resource',
  officialNote: 'Demo: set VITE_OFFICIAL_URL to the real official page.', successTitle: 'You are ready for the next step!',
  c1: 'Skill selected', c2: 'Eligibility checked', c3: 'Documents identified', c4: 'Registration steps explained', again: 'I need help again',
  verify: 'Before sharing personal information, check that you are on the official government website. Never share OTP, password or PIN.',
  demoInfo: 'Demo information — verify current eligibility and availability with the official provider.', demoAI: 'Demo AI mode',
  speechFail: 'I could not understand your voice. Please speak again.', aiFail: 'Sorry. Please say it once more, in simple words.', micOff: 'Microphone is not available. Please type.',
  simpleSkill: 'Just say one word: tailoring (sewing), computer, or beauty.', simpleAge: 'Just say a number, like 24.', simpleDistrict: 'Tell me the name of your city or town, like Chennai.',
  simpleFound: 'This is a free training near you. The papers you need are listed below.',
  aadhaar: 'Aadhaar', mobile: 'Mobile Number', address: 'Address Proof',
  p1: 'Understood your need', p2: 'Your details', p3: 'Finding training', p4: 'Eligibility', p5: 'Documents', p6: 'Next steps',
}
const ta: D = {
  hello: 'வணக்கம் 👋', hereHelp: 'நான் உங்களுக்கு உதவ இங்கே இருக்கிறேன்.', whatNeed: 'உங்களுக்கு என்ன உதவி வேண்டும்?', speak: 'பேசுங்கள்', type: 'Type செய்யுங்கள்',
  ph: 'உங்களுக்கு என்ன வேண்டும் என்று சொல்லுங்கள்…', listening: 'கேட்டுக்கொண்டிருக்கிறேன்…', youSaid: 'நீங்கள் சொன்னது:', send: 'அனுப்பு', edit: 'மாற்று',
  tryAgain: 'மீண்டும் முயற்சி', typeInstead: 'Type செய்யுங்கள்', listen: 'கேளுங்கள்', dontUnderstand: 'எனக்கு புரியவில்லை', back: 'பின்னால்',
  okHelp: 'சரி 👍 நான் உங்களுக்கு உதவுகிறேன்.', ok: 'சரி 👍', qSkill: 'உங்களுக்கு எந்த வகையான பயிற்சி வேண்டும்? தையல், கணினி, அழகு பயிற்சி போன்றவை.',
  qAge: 'உங்கள் வயது என்ன?', qDistrict: 'நீங்கள் எந்த மாவட்டத்தில் வசிக்கிறீர்கள்?',
  ageLow: 'இந்த பயிற்சி 18 வயது மற்றும் அதற்கு மேல் உள்ளவர்களுக்கு. உங்கள் வயதை மீண்டும் சொல்லுங்கள்.', found: 'உங்களுக்கு பொருத்தமான பயிற்சி கண்டுபிடிக்கப்பட்டுள்ளது.',
  titleCard: 'உங்களுக்கு பொருத்தமான பயிற்சி', eligTitle: 'நீங்கள் தெரிந்து கொள்ள வேண்டியது', minAge: '{n}+ வயது', docsTitle: 'தேவையான ஆவணங்கள்', months: '{n} மாதங்கள்', fee: 'Demo: இலவசம்',
  askNext: 'அடுத்த படியை நான் உங்களுக்கு சொல்லட்டுமா?', yes: 'ஆம்', other: 'வேறு பயிற்சி தேடுங்கள்', next: 'அடுத்து', stepOf: 'படி {a} / {b}',
  s1: 'உங்கள் Aadhaar அட்டையை தயாராக வைத்துக்கொள்ளுங்கள்.', s2: 'உங்கள் mobile number தயாராக வைத்துக்கொள்ளுங்கள்.', s3: 'இப்போது registration form-ஐ திறக்கலாம்.', s4: 'உங்கள் விவரங்களை சரிபார்த்து Submit செய்யுங்கள்.',
  s1s: 'Aadhaar என்பது உங்கள் அடையாள அட்டை. அதை கையில் எடுத்து வையுங்கள்.', s2s: 'உங்கள் போன் பக்கத்தில் இருக்கட்டும். அதன் எண் தேவைப்படும்.',
  s3s: 'Form என்றால் உங்கள் பெயர், விவரம் எழுதும் பக்கம். இப்போது காட்டுகிறேன்.', s4s: 'நீங்கள் எழுதியதை பாருங்கள். சரியாக இருந்தால் Submit பட்டனை அழுத்துங்கள்.',
  openForm: 'Demo form-ஐ திறக்கவும்', demoReg: 'DEMO பதிவு — உண்மையான விண்ணப்பம் எதுவும் அனுப்பப்படாது.', lName: 'உங்கள் பெயர்', lAge: 'வயது', lMobile: 'மொபைல் எண்',
  lDistrict: 'மாவட்டம்', lTraining: 'பயிற்சி', submit: 'Submit', fillAll: 'உங்கள் பெயரையும் 10 இலக்க மொபைல் எண்ணையும் எழுதுங்கள்.',
  regDone: 'பதிவு வழிகாட்டுதல் முடிந்தது', regDoneSub: 'உங்கள் விவரங்கள் வெற்றிகரமாக தயார் செய்யப்பட்டன.',
  regNext: 'அடுத்த படி: உண்மையான பதிவை முடிக்க அதிகாரப்பூர்வ சேவை மையத்திற்கு செல்லுங்கள்.', openOfficial: 'அதிகாரப்பூர்வ தளத்தை திறக்கவும்',
  officialNote: 'Demo: உண்மையான அதிகாரப்பூர்வ பக்கத்தை VITE_OFFICIAL_URL-ல் அமைக்கவும்.', successTitle: 'நீங்கள் அடுத்த படிக்கு தயாராக உள்ளீர்கள்!',
  c1: 'பயிற்சி தேர்ந்தெடுக்கப்பட்டது', c2: 'தகுதி சரிபார்க்கப்பட்டது', c3: 'ஆவணங்கள் தெரிந்தன', c4: 'பதிவு படிகள் விளக்கப்பட்டன', again: 'மீண்டும் உதவி வேண்டும்',
  verify: 'தனிப்பட்ட தகவல்களை கொடுக்கும் முன், அதிகாரப்பூர்வ அரசு இணையதளம்தானா என்று சரிபாருங்கள். OTP, password, PIN யாருக்கும் சொல்லாதீர்கள்.',
  demoInfo: 'Demo தகவல் — தற்போதைய தகுதி மற்றும் இடங்களை அதிகாரப்பூர்வ நிறுவனத்தில் உறுதிசெய்யுங்கள்.', demoAI: 'Demo AI mode',
  speechFail: 'என்னால் உங்கள் குரலை புரிந்து கொள்ள முடியவில்லை. தயவுசெய்து மீண்டும் பேசுங்கள்.', aiFail: 'மன்னிக்கவும். மீண்டும் ஒரு முறை எளிமையாக சொல்லுங்கள்.', micOff: 'மைக் கிடைக்கவில்லை. தயவுசெய்து Type செய்யுங்கள்.',
  simpleSkill: 'ஒரே ஒரு சொல் போதும்: தையல், கணினி, அல்லது அழகு.', simpleAge: 'ஒரு எண் மட்டும் சொல்லுங்கள். உதாரணம்: 24.', simpleDistrict: 'உங்கள் ஊர் அல்லது நகரின் பெயரை சொல்லுங்கள். உதாரணம்: சென்னை.',
  simpleFound: 'இது உங்கள் அருகில் உள்ள இலவச பயிற்சி. இதற்கு தேவையான காகிதங்கள் கீழே உள்ளன.',
  aadhaar: 'Aadhaar', mobile: 'Mobile Number', address: 'முகவரி சான்று',
  p1: 'உங்கள் தேவை புரிந்தது', p2: 'உங்கள் விவரங்கள்', p3: 'பயிற்சி தேடல்', p4: 'தகுதி', p5: 'ஆவணங்கள்', p6: 'அடுத்த படிகள்',
}
const hi: D = {
  hello: 'नमस्ते 👋', hereHelp: 'मैं आपकी मदद के लिए यहाँ हूँ।', whatNeed: 'आपको किस चीज़ में मदद चाहिए?', speak: 'बोलिए', type: 'लिखिए',
  ph: 'बताइए आपको क्या चाहिए…', listening: 'सुन रही हूँ…', youSaid: 'आपने कहा:', send: 'भेजें', edit: 'बदलें', tryAgain: 'फिर कोशिश करें', typeInstead: 'लिखकर बताइए',
  listen: 'सुनिए', dontUnderstand: 'मुझे समझ नहीं आया', back: 'पीछे', okHelp: 'ठीक है 👍 मैं आपकी मदद करती हूँ।', ok: 'ठीक है 👍',
  qSkill: 'आपको किस तरह की ट्रेनिंग चाहिए? जैसे सिलाई, कंप्यूटर या ब्यूटी।', qAge: 'आपकी उम्र क्या है?', qDistrict: 'आप किस ज़िले में रहती हैं?',
  ageLow: 'यह ट्रेनिंग 18 साल या उससे ज़्यादा उम्र के लिए है। कृपया अपनी उम्र फिर बताइए।', found: 'आपके लिए सही ट्रेनिंग मिल गई है।',
  titleCard: 'आपके लिए सही ट्रेनिंग', eligTitle: 'आपको यह जानना ज़रूरी है', minAge: '{n}+ साल', docsTitle: 'ज़रूरी कागज़ात', months: '{n} महीने', fee: 'Demo: मुफ़्त',
  askNext: 'क्या मैं अगला कदम बताऊँ?', yes: 'हाँ', other: 'दूसरी ट्रेनिंग खोजें', next: 'आगे', stepOf: 'कदम {a} / {b}',
  s1: 'अपना आधार कार्ड तैयार रखिए।', s2: 'अपना मोबाइल नंबर तैयार रखिए।', s3: 'अब हम रजिस्ट्रेशन फ़ॉर्म खोलेंगे।', s4: 'अपनी जानकारी जाँचिए और Submit दबाइए।',
  openForm: 'Demo फ़ॉर्म खोलें', demoReg: 'DEMO रजिस्ट्रेशन — कोई असली आवेदन नहीं भेजा जाएगा।', lName: 'आपका नाम', lAge: 'उम्र', lMobile: 'मोबाइल नंबर', lDistrict: 'ज़िला', lTraining: 'ट्रेनिंग',
  submit: 'Submit', fillAll: 'अपना नाम और 10 अंकों का मोबाइल नंबर लिखिए।', regDone: 'रजिस्ट्रेशन मार्गदर्शन पूरा हुआ', regDoneSub: 'आपकी जानकारी तैयार हो गई है।',
  regNext: 'अगला कदम: असली रजिस्ट्रेशन के लिए आधिकारिक सेवा केंद्र पर जाइए।', openOfficial: 'आधिकारिक साइट खोलें', officialNote: 'Demo: असली आधिकारिक पेज VITE_OFFICIAL_URL में डालें।',
  successTitle: 'आप अगले कदम के लिए तैयार हैं!', c1: 'ट्रेनिंग चुनी गई', c2: 'पात्रता जाँची गई', c3: 'कागज़ात पता चले', c4: 'रजिस्ट्रेशन के कदम समझाए गए', again: 'फिर से मदद चाहिए',
  verify: 'अपनी निजी जानकारी देने से पहले जाँचिए कि यह आधिकारिक सरकारी वेबसाइट है। OTP, पासवर्ड या PIN किसी को न बताएँ।',
  demoInfo: 'Demo जानकारी — मौजूदा पात्रता और उपलब्धता आधिकारिक संस्था से पक्की कर लें।', speechFail: 'मैं आपकी आवाज़ समझ नहीं पाई। कृपया फिर बोलिए।',
  aiFail: 'माफ़ कीजिए। कृपया एक बार फिर आसान शब्दों में बताइए।', micOff: 'माइक उपलब्ध नहीं है। कृपया लिखिए।',
  simpleSkill: 'बस एक शब्द बोलिए: सिलाई, कंप्यूटर या ब्यूटी।', simpleAge: 'बस एक संख्या बोलिए, जैसे 24।', simpleDistrict: 'अपने शहर या गाँव का नाम बताइए, जैसे चेन्नई।',
  simpleFound: 'यह आपके पास की मुफ़्त ट्रेनिंग है। ज़रूरी कागज़ नीचे हैं।', aadhaar: 'आधार', mobile: 'मोबाइल नंबर', address: 'पते का प्रमाण',
}
// Telugu / Malayalam / Kannada: core journey strings; anything else falls back to English.
const te: D = {
  hello: 'నమస్కారం 👋', hereHelp: 'నేను మీకు సహాయం చేయడానికి ఇక్కడ ఉన్నాను.', whatNeed: 'మీకు ఏ సహాయం కావాలి?', speak: 'మాట్లాడండి', type: 'టైప్ చేయండి',
  ph: 'మీకు ఏం కావాలో చెప్పండి…', listening: 'వింటున్నాను…', youSaid: 'మీరు చెప్పింది:', send: 'పంపండి', edit: 'మార్చండి', listen: 'వినండి', dontUnderstand: 'నాకు అర్థం కాలేదు', back: 'వెనక్కి',
  okHelp: 'సరే 👍 నేను మీకు సహాయం చేస్తాను.', ok: 'సరే 👍', qSkill: 'మీకు ఏ శిక్షణ కావాలి? కుట్టు, కంప్యూటర్, బ్యూటీ లాంటివి.', qAge: 'మీ వయసు ఎంత?', qDistrict: 'మీరు ఏ జిల్లాలో ఉంటారు?',
  found: 'మీకు సరిపోయే శిక్షణ దొరికింది.', askNext: 'తదుపరి దశ చెప్పమంటారా?', yes: 'అవును', next: 'తరువాత', speechFail: 'మీ గొంతు అర్థం కాలేదు. దయచేసి మళ్లీ చెప్పండి.',
}
const ml: D = {
  hello: 'നമസ്കാരം 👋', hereHelp: 'ഞാൻ നിങ്ങളെ സഹായിക്കാൻ ഇവിടെയുണ്ട്.', whatNeed: 'നിങ്ങൾക്ക് എന്ത് സഹായം വേണം?', speak: 'സംസാരിക്കൂ', type: 'ടൈപ്പ് ചെയ്യൂ',
  ph: 'നിങ്ങൾക്ക് എന്താണ് വേണ്ടതെന്ന് പറയൂ…', listening: 'കേൾക്കുന്നു…', youSaid: 'നിങ്ങൾ പറഞ്ഞത്:', send: 'അയയ്ക്കൂ', edit: 'മാറ്റൂ', listen: 'കേൾക്കൂ', dontUnderstand: 'എനിക്ക് മനസ്സിലായില്ല', back: 'പിന്നോട്ട്',
  okHelp: 'ശരി 👍 ഞാൻ സഹായിക്കാം.', ok: 'ശരി 👍', qSkill: 'നിങ്ങൾക്ക് ഏത് പരിശീലനം വേണം? തയ്യൽ, കമ്പ്യൂട്ടർ, ബ്യൂട്ടി തുടങ്ങിയവ.', qAge: 'നിങ്ങളുടെ പ്രായം എത്രയാണ്?',
  qDistrict: 'നിങ്ങൾ ഏത് ജില്ലയിലാണ് താമസിക്കുന്നത്?', found: 'നിങ്ങൾക്ക് അനുയോജ്യമായ പരിശീലനം കണ്ടെത്തി.', askNext: 'അടുത്ത ഘട്ടം പറയട്ടെ?', yes: 'അതെ', next: 'അടുത്തത്',
  speechFail: 'നിങ്ങളുടെ ശബ്ദം മനസ്സിലായില്ല. ദയവായി വീണ്ടും പറയൂ.',
}
const kn: D = {
  hello: 'ನಮಸ್ಕಾರ 👋', hereHelp: 'ನಾನು ನಿಮಗೆ ಸಹಾಯ ಮಾಡಲು ಇಲ್ಲಿದ್ದೇನೆ.', whatNeed: 'ನಿಮಗೆ ಯಾವ ಸಹಾಯ ಬೇಕು?', speak: 'ಮಾತನಾಡಿ', type: 'ಟೈಪ್ ಮಾಡಿ',
  ph: 'ನಿಮಗೆ ಏನು ಬೇಕು ಎಂದು ಹೇಳಿ…', listening: 'ಕೇಳುತ್ತಿದ್ದೇನೆ…', youSaid: 'ನೀವು ಹೇಳಿದ್ದು:', send: 'ಕಳುಹಿಸಿ', edit: 'ಬದಲಿಸಿ', listen: 'ಕೇಳಿ', dontUnderstand: 'ನನಗೆ ಅರ್ಥವಾಗಲಿಲ್ಲ', back: 'ಹಿಂದೆ',
  okHelp: 'ಸರಿ 👍 ನಾನು ಸಹಾಯ ಮಾಡುತ್ತೇನೆ.', ok: 'ಸರಿ 👍', qSkill: 'ನಿಮಗೆ ಯಾವ ತರಬೇತಿ ಬೇಕು? ಹೊಲಿಗೆ, ಕಂಪ್ಯೂಟರ್, ಬ್ಯೂಟಿ ಮುಂತಾದವು.', qAge: 'ನಿಮ್ಮ ವಯಸ್ಸು ಎಷ್ಟು?',
  qDistrict: 'ನೀವು ಯಾವ ಜಿಲ್ಲೆಯಲ್ಲಿ ವಾಸಿಸುತ್ತೀರಿ?', found: 'ನಿಮಗೆ ಸೂಕ್ತವಾದ ತರಬೇತಿ ಸಿಕ್ಕಿದೆ.', askNext: 'ಮುಂದಿನ ಹಂತ ಹೇಳಲೇ?', yes: 'ಹೌದು', next: 'ಮುಂದೆ',
  speechFail: 'ನಿಮ್ಮ ಧ್ವನಿ ಅರ್ಥವಾಗಲಿಲ್ಲ. ದಯವಿಟ್ಟು ಮತ್ತೆ ಹೇಳಿ.',
}
const T: Record<Lang, D> = { en, ta, hi, te, ml, kn }
export const t = (lang: Lang, key: string, v: Record<string, string | number> = {}) =>
  (T[lang][key] ?? en[key] ?? key).replace(/\{(\w+)\}/g, (_, k) => String(v[k] ?? ''))
