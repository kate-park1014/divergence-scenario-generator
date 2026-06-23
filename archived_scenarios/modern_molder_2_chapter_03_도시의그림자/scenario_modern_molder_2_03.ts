export const scenario_modern_molder_2_03 = {
	"scenario_id": "modern_molder_2_03",
	"order": 3,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"nia": {
			"id": "mon_872177dd-fcf0-40d8-b78c-fd795017c763",
			"name": {
				"korean": "니아",
				"english": "Nia",
				"japanese": "ニア",
				"chinese": "妮娅",
				"french": "Nia",
				"spanish": "Nia",
				"vietnamese": "Nia",
				"thai": "เนีย",
				"hindi": "निया"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/db690f96-d5b3-498a-f4ec-f269e6e95100/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a8fe5d7a-56fe-4822-c272-5a04fd7f4c00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"과거의 그림자가 도시를 덮친다.",
			"잊힌 기록 속, 잔혹한 진실이 숨 쉬고.",
			"오염의 뿌리를 찾아서, 미지의 공포로.",
			"탐험대는 오래된 죄악과 마주한다."
		],
		"english": [
			"Shadows of the past shroud the city.",
			"Forgotten records conceal a brutal truth.",
			"Seeking the root of corruption, into unknown horror.",
			"The expedition confronts an ancient sin."
		],
		"japanese": [
			"過去の影が都市を覆う。",
			"忘れられた記録の中に、残酷な真実が息づく。",
			"汚染の根源を求めて、未知の恐怖へ。",
			"探検隊は古き罪と向き合う。"
		],
		"chinese": [
			"过去的阴影笼罩着城市。",
			"遗忘的记录中，残酷的真相在呼吸。",
			"寻找腐败的根源，走向未知的恐惧。",
			"探险队面对古老的罪恶。"
		],
		"french": [
			"Les ombres du passé recouvrent la ville.",
			"Dans des archives oubliées, une vérité brutale respire.",
			"À la recherche de la racine de la corruption, vers l'horreur inconnue.",
			"L'expédition fait face à un ancien péché."
		],
		"spanish": [
			"Las sombras del pasado cubren la ciudad.",
			"En registros olvidados, una verdad brutal respira.",
			"Buscando la raíz de la corrupción, hacia el horror desconocido.",
			"La expedición se enfrenta a un antiguo pecado."
		],
		"vietnamese": [
			"Bóng tối quá khứ bao trùm thành phố.",
			"Trong những ghi chép bị lãng quên, một sự thật tàn khốc ẩn chứa.",
			"Tìm kiếm gốc rễ của sự ô uế, tiến vào nỗi kinh hoàng chưa biết.",
			"Đội thám hiểm đối mặt với tội ác cổ xưa."
		],
		"thai": [
			"เงาของอดีตปกคลุมเมือง",
			"ในบันทึกที่ถูกลืม ความจริงอันโหดร้ายซ่อนอยู่",
			"ตามหารากเหง้าแห่งการแปดเปื้อน สู่ความน่าสะพรึงกลัวที่ไม่รู้จัก",
			"คณะสำรวจเผชิญหน้ากับบาปเก่าแก่"
		],
		"hindi": [
			"अतीत की परछाइयां शहर को ढँक लेती हैं।",
			"भूले हुए अभिलेखों में, एक क्रूर सत्य साँस लेता है।",
			"भ्रष्टाचार की जड़ की तलाश में, अज्ञात भय की ओर।",
			"अभियान दल एक प्राचीन पाप का सामना करता है।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "오래된 구시가지, 버려진 기록 보관소였다.",
						"english": "It was an old district, a forgotten archive.",
						"japanese": "それは古き旧市街、廃れた記録保管所だった。",
						"chinese": "那是旧城区的废弃档案室。",
						"french": "C'était un vieux quartier, des archives abandonnées.",
						"spanish": "Era un distrito antiguo, un archivo abandonado.",
						"vietnamese": "Đó là một khu phố cổ, một kho lưu trữ bị bỏ hoang.",
						"thai": "มันคือย่านเมืองเก่า ห้องเก็บเอกสารร้าง",
						"hindi": "यह एक पुराना इलाका था, एक परित्यक्त अभिलेखागार।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "여기에 단서가 있을 거라고?",
						"english": "You think there's a clue here?",
						"japanese": "ここに手がかりがあるって言うの？",
						"chinese": "你觉得这里会有线索吗？",
						"french": "Tu penses qu'il y a un indice ici ?",
						"spanish": "¿Crees que hay una pista aquí?",
						"vietnamese": "Bạn nghĩ có manh mối ở đây sao?",
						"thai": "คิดว่าจะมีเบาะแสที่นี่เหรอ?",
						"hindi": "क्या तुम्हें लगता है कि यहाँ कोई सुराग है?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"action": "enter",
					"speaker": "nia",
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "nia",
					"emotion": "base",
					"content": {
						"korean": "제가 보관인 니아입니다. 찾으시는 게 있나요?",
						"english": "I'm Nia, the archivist. Are you looking for something?",
						"japanese": "私が保管人のニアです。何かお探しですか？",
						"chinese": "我是管理员妮娅。您在找什么吗？",
						"french": "Je suis Nia, la gardienne. Cherchez-vous quelque chose ?",
						"spanish": "Soy Nia, la guardiana. ¿Busca algo?",
						"vietnamese": "Tôi là Nia, người trông coi. Bạn đang tìm gì à?",
						"thai": "ฉันคือนีอา ผู้ดูแล มีอะไรให้ช่วยไหมคะ?",
						"hindi": "मैं निया, अभिलेखागारक हूँ। क्या आप कुछ ढूँढ रहे हैं?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "오래된 사건 기록을 찾고 있어. Molder와 관련된 것.",
						"english": "We're looking for old case files. Anything related to Molder.",
						"japanese": "古い事件記録を探している。Molderに関するものだ。",
						"chinese": "我们在找旧案件记录。与Molder有关的。",
						"french": "Nous cherchons de vieux dossiers d'affaires. Tout ce qui est lié à Molder.",
						"spanish": "Estamos buscando expedientes de casos antiguos. Algo relacionado con Molder.",
						"vietnamese": "Chúng tôi đang tìm hồ sơ vụ án cũ. Bất cứ điều gì liên quan đến Molder.",
						"thai": "เรากำลังมองหาแฟ้มคดีเก่าๆ ที่เกี่ยวข้องกับ Molder",
						"hindi": "हम पुराने मामले की फाइलें ढूँढ रहे हैं। मोल्डर से संबंधित कुछ भी।"
					}
				},
				{
					"content": {
						"korean": "…여기는 위험한 기록이 많습니다.",
						"english": "…There are many dangerous records here.",
						"japanese": "…ここには危険な記録が多いです。",
						"chinese": "…这里有很多危险的记录。",
						"french": "...Il y a beaucoup de documents dangereux ici.",
						"spanish": "...Aquí hay muchos registros peligrosos.",
						"vietnamese": "...Ở đây có rất nhiều hồ sơ nguy hiểm.",
						"thai": "...ที่นี่มีบันทึกอันตรายมากมาย",
						"hindi": "...यहाँ बहुत सारे खतरनाक अभिलेख हैं।"
					},
					"emotion": "sad",
					"speaker": "nia",
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "nia",
					"action": "enter",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"content": {
						"korean": "이것 보세요. 구도시 갱단, '블러드 울프'에 대한 기록입니다.",
						"english": "Look at this. It's a record about the Old City gang, 'Blood Wolves'.",
						"japanese": "これを見てください。旧市街のギャング、『ブラッドウルヴス』に関する記録です。",
						"chinese": "看这个。这是关于旧城区帮派'血狼'的记录。",
						"french": "Regardez ça. C'est un dossier sur le gang de la Vieille Ville, les 'Blood Wolves'.",
						"spanish": "Mira esto. Es un registro sobre la pandilla de la Ciudad Vieja, 'Lobos Sangrientos'.",
						"vietnamese": "Hãy nhìn xem. Đây là một ghi chép về băng đảng 'Sói Máu' ở Thành phố Cổ.",
						"thai": "ดูนี่สิครับ นี่คือบันทึกเกี่ยวกับแก๊ง 'บลัดวูล์ฟ' แห่งเมืองเก่า",
						"hindi": "इसे देखो। यह पुराने शहर के गिरोह, 'ब्लड वुल्व्स' के बारे में एक रिकॉर्ड है।"
					},
					"speaker": "nia",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "블러드 울프? 처음 들어봐.",
						"english": "Blood Wolf? Never heard of them.",
						"japanese": "ブラッドウルフ？初めて聞く名前だ。",
						"chinese": "血狼？没听说过。",
						"french": "Loup de Sang ? Jamais entendu parler.",
						"spanish": "¿Lobo Sangriento? Nunca los había oído nombrar.",
						"vietnamese": "Blood Wolf? Lần đầu nghe thấy.",
						"thai": "บลัดวูล์ฟ? ไม่เคยได้ยินมาก่อนเลยนะ",
						"hindi": "ब्लड वुल्फ? पहली बार सुन रहा हूँ。"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이 지역을 피로 물들였죠. 잔혹하기로 악명 높았습니다.",
						"english": "They stained this land with blood, infamous for their cruelty.",
						"japanese": "この地を血で染め、その残忍さで悪名高かった。",
						"chinese": "他们用鲜血染红了这片区域，以残忍而臭名昭著。",
						"french": "Ils ont ensanglanté cette région, tristement célèbres pour leur cruauté.",
						"spanish": "Tiñeron esta región con sangre. Eran infames por su crueldad.",
						"vietnamese": "Chúng đã nhuộm máu cả vùng này, khét tiếng tàn bạo.",
						"thai": "พวกเขาทำให้ดินแดนนี้แปดเปื้อนด้วยเลือด เลื่องชื่อในความโหดเหี้ยม",
						"hindi": "उन्होंने इस इलाके को खून से रंग दिया था। वे अपनी क्रूरता के लिए कुख्यात थे。"
					},
					"speaker": "nia",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "Molder와 관련이 있어?",
						"english": "Are they connected to Molder?",
						"japanese": "Molderと関係があるのか？",
						"chinese": "和Molder有关吗？",
						"french": "Un lien avec Molder ?",
						"spanish": "¿Están relacionados con Molder?",
						"vietnamese": "Có liên quan đến Molder không?",
						"thai": "เกี่ยวข้องกับ Molder รึเปล่า?",
						"hindi": "क्या इनका मोलडर से कोई संबंध है?"
					}
				},
				{
					"content": {
						"korean": "기록이 중간에 끊겨요. 중요한 부분이 사라졌습니다.",
						"english": "The records stop midway. Crucial parts are missing.",
						"japanese": "記録が途中で途切れている。重要な部分が消えている。",
						"chinese": "记录中断了。重要的部分消失了。",
						"french": "Les registres s'interrompent. Des passages cruciaux manquent.",
						"spanish": "Los registros se cortan a mitad. Faltan partes cruciales.",
						"vietnamese": "Hồ sơ bị gián đoạn. Nhiều phần quan trọng đã biến mất.",
						"thai": "บันทึกขาดหายไปกลางคัน ส่วนสำคัญบางส่วนหายไป",
						"hindi": "रिकॉर्ड बीच में ही रुक गए हैं। महत्वपूर्ण हिस्से गायब हैं।"
					},
					"speaker": "nia",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "누가 지운 건가.",
						"english": "Someone erased it, then?",
						"japanese": "誰かが消したのか。",
						"chinese": "是有人删除了吗？",
						"french": "Quelqu'un l'aurait effacé ?",
						"spanish": "¿Alguien lo borró?",
						"vietnamese": "Ai đã xóa nó?",
						"thai": "มีใครบางคนลบมันทิ้งไปงั้นหรือ?",
						"hindi": "क्या किसी ने इसे मिटाया है?"
					},
					"speaker": "character_1",
					"emotion": "angry",
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "nia",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						3
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "블러드 울프는 강한 힘을 원했어요. 그들은 이상한 의식을 치렀다는 소문이…",
						"english": "The Blood Wolf sought great power. Rumor has it they performed strange rituals...",
						"japanese": "ブラッドウルフは強大な力を求めていた。彼らは奇妙な儀式を行っていたという噂が…",
						"chinese": "血狼渴望强大的力量。有传言说他们举行了奇怪的仪式……",
						"french": "Le Loup de Sang convoitait un grand pouvoir. On murmure qu'ils pratiquaient d'étranges rituels...",
						"spanish": "El Lobo Sangriento anhelaba un gran poder. Se rumorea que realizaban rituales extraños…",
						"vietnamese": "Blood Wolf khao khát sức mạnh khủng khiếp. Có tin đồn chúng đã thực hiện các nghi lễ kỳ lạ...",
						"thai": "บลัดวูล์ฟต้องการพลังอันยิ่งใหญ่ มีข่าวลือว่าพวกเขาประกอบพิธีกรรมแปลกๆ...",
						"hindi": "ब्लड वुल्फ को अत्यधिक शक्ति की चाह थी। अफवाह है कि उन्होंने अजीब अनुष्ठान किए थे..."
					},
					"speaker": "nia",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "의식? Molder처럼 도시를 오염시키는?",
						"english": "Rituals? Like Molder, polluting the city?",
						"japanese": "儀式？Molderのように都市を汚染するのか？",
						"chinese": "仪式？像Molder一样污染城市？",
						"french": "Des rituels ? Comme Molder, contaminant la ville ?",
						"spanish": "¿Rituales? ¿Como Molder, contaminando la ciudad?",
						"vietnamese": "Nghi lễ? Như Molder, làm ô nhiễm thành phố?",
						"thai": "พิธีกรรม? เหมือน Molder ที่ทำให้เมืองปนเปื้อนงั้นเหรอ?",
						"hindi": "अनुष्ठान? मोलडर की तरह शहर को प्रदूषित करने वाले?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "nia",
					"content": {
						"korean": "확실치 않습니다. 하지만 그들의 광기는 도시 전체를 집어삼킬 정도였죠.",
						"english": "Uncertain. But their madness was enough to engulf the entire city.",
						"japanese": "定かではない。だが、彼らの狂気は都市全体を飲み込むほどだった。",
						"chinese": "不确定。但他们的疯狂足以吞噬整个城市。",
						"french": "Incertain. Mais leur folie était suffisante pour engloutir la ville entière.",
						"spanish": "Incierto. Pero su locura fue suficiente para engullir toda la ciudad.",
						"vietnamese": "Không chắc chắn. Nhưng sự điên loạn của chúng đủ để nhấn chìm cả thành phố.",
						"thai": "ไม่แน่ใจนัก แต่ความบ้าคลั่งของพวกเขามากพอที่จะกลืนกินทั้งเมือง",
						"hindi": "निश्चित नहीं। लेकिन उनका पागलपन पूरे शहर को निगलने के लिए पर्याप्त था।"
					}
				},
				{
					"content": {
						"korean": "오래된 광기가 Molder의 시작일 수도 있겠네.",
						"english": "Perhaps this ancient madness was Molder's origin.",
						"japanese": "古い狂気がMolderの始まりだったのかもしれないな。",
						"chinese": "这古老的疯狂或许是Molder的开端。",
						"french": "Cette folie ancestrale serait peut-être l'origine de Molder.",
						"spanish": "Quizás esta antigua locura fue el origen de Molder.",
						"vietnamese": "Có thể sự điên loạn cổ xưa này chính là khởi nguồn của Molder.",
						"thai": "บางทีความบ้าคลั่งโบราณนี้อาจเป็นจุดเริ่มต้นของ Molder ก็ได้นะ",
						"hindi": "शायद यह प्राचीन पागलपन मोलडर की शुरुआत रहा हो।"
					},
					"speaker": "character_2",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…더 깊이 파고들수록, 위험해질 겁니다.",
						"english": "...The deeper we dig, the more dangerous it will become.",
						"japanese": "…深く掘り下げるほど、危険になるだろう。",
						"chinese": "……挖得越深，就会越危险。",
						"french": "...Plus on creusera, plus ce sera dangereux.",
						"spanish": "...Cuanto más profundicemos, más peligroso será.",
						"vietnamese": "...Càng đào sâu, càng nguy hiểm.",
						"thai": "...ยิ่งขุดลึกลงไปเท่าไหร่ ก็ยิ่งอันตรายมากขึ้นเท่านั้น",
						"hindi": "...जितना गहरा हम खोदेंगे, उतना ही खतरनाक होता जाएगा।"
					},
					"emotion": "sad",
					"speaker": "nia"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "기록 보관소를 떠나, 탐험대는 더 깊은 구시가지로 향했다.",
						"english": "Leaving the archives, the expedition headed deeper into the Old Quarter.",
						"japanese": "記録保管所を後にし、探検隊は旧市街の奥深くへと向かった。",
						"chinese": "离开档案室，探险队深入旧城区。",
						"french": "Quittant les archives, l'expédition s'enfonça plus profondément dans la vieille ville.",
						"spanish": "Dejando los archivos, la expedición se adentró en el Barrio Antiguo.",
						"vietnamese": "Rời khỏi kho lưu trữ, đoàn thám hiểm tiến sâu hơn vào khu phố cổ.",
						"thai": "ออกจากหอจดหมายเหตุ คณะสำรวจมุ่งหน้าสู่ใจกลางเมืองเก่า",
						"hindi": "अभिलेखागार छोड़कर, अभियान दल पुराने शहर के और भीतर चला गया।"
					}
				},
				{
					"content": {
						"korean": "블러드 울프… 그들의 흔적이 아직 남아있을까.",
						"english": "Blood Wolves... Could their traces still remain?",
						"japanese": "ブラッドウルフ… 彼らの痕跡はまだ残っているのだろうか。",
						"chinese": "血狼……他们的痕迹还会留下吗？",
						"french": "Loups de Sang… Leurs traces subsisteraient-elles encore ?",
						"spanish": "Lobos de Sangre... ¿Podrían quedar aún rastros de ellos?",
						"vietnamese": "Sói Máu... Dấu vết của chúng liệu còn sót lại không?",
						"thai": "บลัดวูล์ฟ... ร่องรอยของพวกมันยังคงหลงเหลืออยู่หรือไม่?",
						"hindi": "ब्लड वुल्फ... क्या उनके निशान अब भी बाकी होंगे?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이 도시의 부패는 뿌리가 깊어.",
						"english": "This city's corruption runs deep.",
						"japanese": "この都市の腐敗は根深い。",
						"chinese": "这座城市的腐败根深蒂固。",
						"french": "La corruption de cette ville est profonde.",
						"spanish": "La corrupción de esta ciudad es profunda.",
						"vietnamese": "Sự thối nát của thành phố này đã ăn sâu.",
						"thai": "การทุจริตของเมืองนี้หยั่งรากลึก",
						"hindi": "इस शहर का भ्रष्टाचार गहरा है।"
					},
					"speaker": "character_3",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "Molder는 그저 결과일지도 몰라.",
						"english": "Molder might just be a symptom.",
						"japanese": "モルダーは、ただの結果に過ぎないのかもしれない。",
						"chinese": "Molder可能只是一个结果。",
						"french": "Molder n'est peut-être qu'une conséquence.",
						"spanish": "Molder podría ser solo una consecuencia.",
						"vietnamese": "Molder có lẽ chỉ là một hệ quả.",
						"thai": "มอลเดอร์อาจเป็นเพียงผลลัพธ์",
						"hindi": "मोल्डर शायद बस एक परिणाम हो।"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "어둠 속에서, 거대한 그림자가 움직이기 시작했다.",
						"english": "In the darkness, a colossal shadow began to stir.",
						"japanese": "闇の中で、巨大な影が動き始めた。",
						"chinese": "黑暗中，一个巨大的身影开始移动。",
						"french": "Dans l'obscurité, une ombre gigantesque commença à bouger.",
						"spanish": "En la oscuridad, una sombra colosal comenzó a moverse.",
						"vietnamese": "Trong bóng tối, một cái bóng khổng lồ bắt đầu di chuyển.",
						"thai": "ในความมืด เงาขนาดมหึมาเริ่มเคลื่อนไหว",
						"hindi": "अंधेरे में, एक विशाल परछाई हिलने लगी।"
					},
					"type": "speech"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "이 도시는 썩어 마땅해. 너희도 곧 동화될 것이다.",
						"english": "This city deserves to rot. You too will soon assimilate.",
						"japanese": "この都市は腐りきっている。お前たちもじきに同化するだろう。",
						"chinese": "这座城市该腐烂了。你们也很快会被同化。",
						"french": "Cette ville mérite de pourrir. Vous aussi serez bientôt assimilés.",
						"spanish": "Esta ciudad merece pudrirse. Vosotros también seréis asimilados pronto.",
						"vietnamese": "Thành phố này đáng phải mục rữa. Các ngươi cũng sẽ sớm bị đồng hóa thôi.",
						"thai": "เมืองนี้สมควรเน่าเปื่อย พวกเจ้าก็จะถูกหลอมรวมในไม่ช้า",
						"hindi": "यह शहर सड़ने के लायक है। तुम भी जल्द ही आत्मसात हो जाओगे।"
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "…다시 돌아올 거야. 반드시.",
						"english": "...I will return. I must.",
						"japanese": "…また戻ってくる。必ず。",
						"chinese": "……我还会回来的。一定。",
						"french": "...Je reviendrai. Sûrement.",
						"spanish": "...Volveré. Con certeza.",
						"vietnamese": "...Ta sẽ trở lại. Nhất định.",
						"thai": "...ข้าจะกลับมาให้ได้",
						"hindi": "...मैं वापस आऊँगा। निश्चित रूप से।"
					},
					"type": "speech"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "…어리석군. 진정한 주인은 따로 있어. 너희는 이용당할 뿐.",
						"english": "...Foolish. There is a true master. You are merely being used.",
						"japanese": "…愚かだな。真の主人は別にいる。お前たちは利用されているだけだ。",
						"chinese": "……愚蠢。真正的主人另有其人。你们不过是被利用了而已。",
						"french": "...Stupide. Il y a un vrai maître. Vous n'êtes que des pions.",
						"spanish": "...Qué necios. Hay un verdadero maestro. Solo sois peones.",
						"vietnamese": "...Thật ngu xuẩn. Có một chủ nhân thật sự khác. Các ngươi chỉ là đang bị lợi dụng thôi.",
						"thai": "...ช่างโง่เขลา เจ้าของที่แท้จริงนั้นอยู่ที่อื่น พวกเจ้าเป็นเพียงเครื่องมือเท่านั้น",
						"hindi": "...मूर्ख। असली मालिक कोई और है। तुम्हें बस इस्तेमाल किया जा रहा है।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "무슨 소리야?",
						"english": "What are you talking about?",
						"japanese": "何を言っているんだ？",
						"chinese": "你在说什么？",
						"french": "Qu'est-ce que tu racontes ?",
						"spanish": "¿De qué estás hablando?",
						"vietnamese": "Ngươi đang nói gì vậy?",
						"thai": "เจ้ากำลังพูดเรื่องอะไร?",
						"hindi": "क्या बक रहे हो?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "쓰러진 그림자. 그러나 의문은 더 깊어졌다. 진실을 감춘 자는 누구인가?",
						"english": "The shadow fell. But the mystery deepened. Who hides the truth?",
						"japanese": "影は倒れた。しかし、疑問はさらに深まった。真実を隠しているのは誰だ？",
						"chinese": "倒下的影子。然而疑问更深了。是谁隐藏了真相？",
						"french": "L'ombre est tombée. Mais le mystère s'épaissit. Qui cache la vérité ?",
						"spanish": "La sombra cayó. Pero el misterio se hizo más profundo. ¿Quién oculta la verdad?",
						"vietnamese": "Bóng tối đã ngã xuống. Nhưng nghi vấn càng sâu sắc hơn. Ai là kẻ đang che giấu sự thật?",
						"thai": "เงาได้ล้มลงแล้ว แต่ความสงสัยกลับเพิ่มพูนขึ้น ใครกันที่ซ่อนความจริงไว้?",
						"hindi": "छाया गिरी। लेकिन रहस्य और गहरा हो गया। सच कौन छिपा रहा है?"
					},
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "오래된 공장 지대, 부패한 도시의 심장이었다.",
						"english": "The old factory district, the corrupt city's heart.",
						"japanese": "古い工場地帯、腐敗した都市の心臓部だった。",
						"chinese": "旧工厂区，腐朽城市的心脏。",
						"french": "L'ancien quartier industriel, le cœur de cette ville corrompue.",
						"spanish": "El antiguo distrito industrial, el corazón de la ciudad corrupta.",
						"vietnamese": "Khu công nghiệp cũ, trái tim của thành phố mục nát.",
						"thai": "เขตโรงงานเก่า หัวใจของเมืองที่เสื่อมทราม",
						"hindi": "पुराना कारखाना क्षेत्र, भ्रष्ट शहर का दिल था।"
					}
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "오랜만에 손님인가. 이 도시의 죄악을 보러 왔군.",
						"english": "Guests after a long time. You've come to witness this city's sins.",
						"japanese": "久しぶりの客か。この都市の罪悪を見に来たか。",
						"chinese": "真是久违的客人。你是来看这座城市的罪恶的吧。",
						"french": "Des visiteurs après si longtemps. Vous êtes venus voir les péchés de cette ville.",
						"spanish": "Invitados después de tanto tiempo. Habéis venido a presenciar los pecados de esta ciudad.",
						"vietnamese": "Lâu rồi mới có khách. Ngươi đến để chứng kiến tội lỗi của thành phố này à.",
						"thai": "แขกที่มาเยือนหลังจากผ่านไปนาน เจ้าคงมาดูบาปของเมืองนี้สินะ",
						"hindi": "बहुत समय बाद मेहमान आए हैं। तुम इस शहर के पाप देखने आए हो।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "네가 Molder의 원흉인가!",
						"english": "You're the source of Molder!",
						"japanese": "お前がモルダーの元凶か！",
						"chinese": "你是Molder的元凶！",
						"french": "Tu es la cause de Molder !",
						"spanish": "¡¿Tú eres la raíz de Molder?!",
						"vietnamese": "Ngươi chính là kẻ chủ mưu của Molder!",
						"thai": "แกคือต้นตอของมอลเดอร์ใช่ไหม!",
						"hindi": "क्या तुम मोल्डर की जड़ हो!"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "나는 그저 거울. 너희 도시의 추악함을 비출 뿐.",
						"english": "I am merely a mirror. Reflecting your city's ugliness.",
						"japanese": "私はただの鏡。お前たちの都市の醜悪さを映すだけだ。",
						"chinese": "我不过是一面镜子。只映照出你们城市的丑恶。",
						"french": "Je ne suis qu'un miroir. Je ne fais que refléter la laideur de votre ville.",
						"spanish": "Soy solo un espejo. Solo reflejo la fealdad de vuestra ciudad.",
						"vietnamese": "Ta chỉ là một tấm gương. Chỉ phản chiếu sự xấu xí của thành phố các ngươi.",
						"thai": "ข้าเป็นเพียงกระจกเงา สะท้อนความอัปลักษณ์ของเมืองของพวกเจ้าเท่านั้น",
						"hindi": "मैं सिर्फ एक दर्पण हूँ। तुम्हारे शहर की बदसूरती को दर्शाता हूँ।"
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_4",
					"content": {
						"korean": "도망칠 생각 마!",
						"english": "Don't even think about escaping!",
						"japanese": "逃げようとするな！",
						"chinese": "别想逃跑！",
						"french": "Ne songe même pas à t'échapper !",
						"spanish": "¡Ni se te ocurra escapar!",
						"vietnamese": "Đừng hòng chạy thoát!",
						"thai": "อย่าคิดหนี!",
						"hindi": "भागने की सोचना भी मत!"
					},
					"type": "speech"
				}
			]
		}
	]
} as const;
