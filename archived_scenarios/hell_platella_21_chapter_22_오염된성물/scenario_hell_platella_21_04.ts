export const scenario_hell_platella_21_04 = {
	"scenario_id": "hell_platella_21_04",
	"order": 4,
	"act": "rising",
	"theme": "hell",
	"actors": {
		"drox": {
			"id": "mon_2fc30621-a15f-4371-9e37-295cdcb5675d",
			"name": {
				"korean": "드록스",
				"english": "Drox",
				"japanese": "ドロックス",
				"chinese": "德罗克斯",
				"french": "Drox",
				"spanish": "Drox",
				"vietnamese": "Đrốc",
				"thai": "ดรอกซ์",
				"hindi": "ड्रॉक्स"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/509c0376-2230-4669-d022-7e5336293200/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/916b4cfa-f792-4f4a-5346-681095481e00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "깨끗하게 닦인 지옥의 바닥. 생명의 흔적은 없었다.",
						"english": "Hell's floor, wiped clean. No trace of life remained.",
						"japanese": "きれいに拭き清められた地獄の床。生命の痕跡はなかった。",
						"chinese": "地狱的地板被擦拭得一尘不染。没有生命的痕迹。",
						"french": "Le sol de l'enfer, nettoyé à fond. Aucune trace de vie.",
						"spanish": "El suelo del infierno, limpio. Sin rastro de vida.",
						"vietnamese": "Sàn địa ngục được lau sạch. Không một dấu vết sự sống.",
						"thai": "พื้นนรกที่ถูกเช็ดจนสะอาด ไม่มีร่องรอยของสิ่งมีชีวิต",
						"hindi": "नर्क की ज़मीन, साफ़ कर दी गई। जीवन का कोई निशान नहीं बचा।"
					}
				},
				{
					"content": {
						"korean": "너무… 조용해.",
						"english": "It's too... quiet.",
						"japanese": "あまりにも… 静かだ。",
						"chinese": "太…安静了。",
						"french": "C'est trop... calme.",
						"spanish": "Es demasiado... silencioso.",
						"vietnamese": "Quá… yên tĩnh.",
						"thai": "เงียบ...เกินไป",
						"hindi": "बहुत… खामोशी है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이게 진짜 지옥이야?",
						"english": "Is this really hell?",
						"japanese": "ここが本当に地獄なのか？",
						"chinese": "这真的是地狱吗？",
						"french": "Est-ce vraiment l'enfer ?",
						"spanish": "¿Esto es realmente el infierno?",
						"vietnamese": "Đây có thật là địa ngục không?",
						"thai": "นี่คือนรกจริงๆ เหรอ?",
						"hindi": "क्या यह वाकई नर्क है?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"spot": [
						4,
						3
					],
					"speaker": "drox",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"content": {
						"korean": "아니. 지옥은 이렇지 않았어!",
						"english": "No. Hell wasn't like this!",
						"japanese": "違う。地獄はこんなじゃなかった！",
						"chinese": "不。地狱不是这样的！",
						"french": "Non. L'enfer n'était pas comme ça !",
						"spanish": "¡No. El infierno no era así!",
						"vietnamese": "Không. Địa ngục không phải thế này!",
						"thai": "ไม่ใช่ นรกไม่ใช่แบบนี้!",
						"hindi": "नहीं। नर्क ऐसा नहीं था!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "drox"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "이 모든 '깨끗함'이 우리를 죽이고 있어.",
						"english": "All this 'cleanliness' is killing us.",
						"japanese": "この全ての「清潔さ」が、私たちを殺している。",
						"chinese": "所有这些“洁净”正在杀死我们。",
						"french": "Toute cette 'propreté' est en train de nous tuer.",
						"spanish": "Toda esta 'limpieza' nos está matando.",
						"vietnamese": "Tất cả sự 'sạch sẽ' này đang giết chết chúng ta.",
						"thai": "ความ 'สะอาด' ทั้งหมดนี้กำลังฆ่าเรา",
						"hindi": "यह सारी 'स्वच्छता' हमें मार रही है।"
					},
					"speaker": "drox"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"speaker": "drox",
					"spot": [
						4,
						3
					]
				},
				{
					"content": {
						"korean": "플라텔라가 오고… 모두 변했어. 기억까지도.",
						"english": "Platella came... and everything changed. Even memories.",
						"japanese": "プラテラが来て…全てが変わった。記憶さえも。",
						"chinese": "普拉特拉来了……一切都变了。甚至记忆。",
						"french": "Platella est venue... et tout a changé. Même les souvenirs.",
						"spanish": "Platella llegó... y todo cambió. Incluso los recuerdos.",
						"vietnamese": "Platella đến… và mọi thứ đã thay đổi. Kể cả ký ức.",
						"thai": "พลาเทลล่ามา... และทุกอย่างก็เปลี่ยนไป แม้แต่ความทรงจำ",
						"hindi": "प्लेटेलला आई… और सब कुछ बदल गया। यादें भी।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "drox"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "오염이 생명이었다는 말… 진짜야?",
						"english": "Corruption was life... Is that true?",
						"japanese": "汚染が命だったと…本当か？",
						"chinese": "污染就是生命…是真的吗？",
						"french": "La corruption était la vie... C'est vrai ?",
						"spanish": "La corrupción era vida... ¿Es cierto?",
						"vietnamese": "Ô nhiễm là sự sống... Thật sao?",
						"thai": "ที่ว่าการปนเปื้อนคือชีวิต... จริงเหรอ?",
						"hindi": "प्रदूषण ही जीवन था... क्या यह सच है?"
					}
				},
				{
					"content": {
						"korean": "그래. 추악하고 더러울수록… 우리는 강했다.",
						"english": "Yes. The uglier, the fouler... the stronger we became.",
						"japanese": "ああ。醜く、汚いほど…我らは強かった。",
						"chinese": "是啊。越是丑陋肮脏…我们越强大。",
						"french": "Oui. Plus nous étions laids et sales... plus nous étions forts.",
						"spanish": "Sí. Cuanto más feos y sucios... más fuertes éramos.",
						"vietnamese": "Phải. Càng xấu xí, càng bẩn thỉu... chúng ta càng mạnh.",
						"thai": "ใช่ ยิ่งอัปลักษณ์ สกปรกเท่าไหร่... เรายิ่งแข็งแกร่งเท่านั้น",
						"hindi": "हाँ। जितने बदसूरत और गंदे थे... हम उतने ही मजबूत थे।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "drox"
				},
				{
					"speaker": "drox",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "이젠… 아무것도 남아있지 않아.",
						"english": "Now... nothing remains.",
						"japanese": "もう…何も残っていない。",
						"chinese": "现在…什么都没剩下。",
						"french": "Maintenant... il ne reste plus rien.",
						"spanish": "Ahora... no queda nada.",
						"vietnamese": "Giờ đây... chẳng còn gì nữa.",
						"thai": "ตอนนี้... ไม่มีอะไรเหลืออยู่เลย",
						"hindi": "अब... कुछ भी नहीं बचा है।"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "(애쉬를 보며) …쟤도 점점 이상해지고 있어.",
						"english": "(Looking at Ash) ...She's getting stranger, too.",
						"japanese": "(アッシュを見て) …あいつもだんだんおかしくなっている。",
						"chinese": "(看着艾什) …她也变得越来越奇怪了。",
						"french": " (Regardant Ash) ...Elle aussi devient de plus en plus étrange.",
						"spanish": "(Mirando a Ash) ...Ella también se está volviendo cada vez más extraña.",
						"vietnamese": "(Nhìn Ash) ...Cô ấy cũng đang dần trở nên kỳ lạ.",
						"thai": "(มองแอช) ...หมอนั่นก็เริ่มแปลกไปเรื่อยๆ แล้ว",
						"hindi": "(ऐश को देखकर) ...वह भी धीरे-धीरे अजीब होती जा रही है।"
					},
					"speaker": "character_any"
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						4,
						3
					],
					"speaker": "drox",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "이젠 더러운 것조차… 소중해.",
						"english": "Now, even what's foul... is precious.",
						"japanese": "今や汚れたものさえ…尊い。",
						"chinese": "现在连肮脏之物…都弥足珍贵。",
						"french": "Maintenant, même ce qui est sale... est précieux.",
						"spanish": "Ahora, incluso lo sucio... es valioso.",
						"vietnamese": "Giờ đây, ngay cả những thứ bẩn thỉu... cũng trở nên quý giá.",
						"thai": "ตอนนี้... แม้แต่สิ่งสกปรกก็ยังล้ำค่า",
						"hindi": "अब तो गंदी चीजें भी... अनमोल हैं।"
					},
					"speaker": "drox"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "왜 저항하지 않는 거야?",
						"english": "Why aren't you resisting?",
						"japanese": "なぜ抵抗しない？",
						"chinese": "为什么不反抗？",
						"french": "Pourquoi ne résistes-tu pas ?",
						"spanish": "¿Por qué no te resistes?",
						"vietnamese": "Sao anh không kháng cự?",
						"thai": "ทำไมนายถึงไม่ต่อต้านล่ะ?",
						"hindi": "तुम विरोध क्यों नहीं कर रहे हो?"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "(좌절하며) 이미 너무 늦었어. 이 깨끗한 절망에 익숙해져 버렸어.",
						"english": "(Frustrated) It's too late. I've grown used to this pure despair.",
						"japanese": "(挫折して) もう手遅れだ。この清らかな絶望に慣れてしまった。",
						"chinese": "(沮丧地) 已经太迟了。我已经习惯了这种纯粹的绝望。",
						"french": "(Frustré) C'est trop tard. Je me suis habitué à ce désespoir pur.",
						"spanish": "(Frustrado) Ya es demasiado tarde. Me he acostumbrado a esta desesperación pura.",
						"vietnamese": "(Thất vọng) Đã quá muộn rồi. Tôi đã quen với sự tuyệt vọng trong sạch này rồi.",
						"thai": "(ท้อแท้) สายเกินไปแล้ว ฉันชินกับความสิ้นหวังที่บริสุทธิ์นี้ไปแล้ว",
						"hindi": "(निराश होकर) बहुत देर हो चुकी है। मैं इस शुद्ध निराशा का आदी हो गया हूँ।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "drox"
				},
				{
					"content": {
						"korean": "(신경질적으로) 더러운 것들은… 모두 없어져야 해.",
						"english": "(Irritably) All that is foul... must be purged.",
						"japanese": "(神経質に) 汚いものは…全て消え去るべきだ。",
						"chinese": "(神经质地) 所有肮脏之物…都必须消失。",
						"french": "(Avec nervosité) Toutes les choses sales... doivent disparaître.",
						"spanish": "(Nerviosamente) Todas las cosas sucias... deben desaparecer.",
						"vietnamese": "(Khó chịu) Mọi thứ dơ bẩn... đều phải biến mất.",
						"thai": "(หงุดหงิด) สิ่งสกปรกทั้งหมด... ต้องหายไปซะ",
						"hindi": "(चिड़चिड़ेपन से) सारी गंदी चीजें... खत्म हो जानी चाहिए।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "나도… 더러워.",
						"english": "I'm... foul too.",
						"japanese": "私も…汚れている。",
						"chinese": "我也…很脏。",
						"french": "Moi aussi... je suis sale.",
						"spanish": "Yo también... estoy sucio.",
						"vietnamese": "Tôi cũng... dơ bẩn.",
						"thai": "ฉันเองก็... สกปรก",
						"hindi": "मैं भी... गंदा हूँ।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "drox",
					"spot": [
						4,
						3
					]
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "(비명에 가깝게) 너희도 결국… 깨끗해질 거야!",
						"english": "(Almost screaming) You'll all be... cleansed eventually!",
						"japanese": "(悲鳴に近い声で) お前たちも結局…きれいになるんだ！",
						"chinese": "(近乎尖叫) 你们也终将…变得纯净！",
						"french": "(Presque en hurlant) Vous aussi, finalement... vous serez purifiés !",
						"spanish": "(Casi gritando) ¡Vosotros también, al final... seréis purificados!",
						"vietnamese": "(Gần như hét lên) Cuối cùng các ngươi cũng sẽ... trở nên trong sạch thôi!",
						"thai": "(กรีดร้อง) สุดท้ายพวกแกก็จะต้อง... สะอาด!",
						"hindi": "(चीखते हुए) तुम सब भी... आखिर में शुद्ध हो जाओगे!"
					},
					"speaker": "drox"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "멈춰! 이대로는 안 돼!",
						"english": "Stop! Not like this!",
						"japanese": "止まれ！このままではいけない！",
						"chinese": "住手！不能这样下去！",
						"french": "Arrête ! Ça ne peut pas continuer ainsi !",
						"spanish": "¡Detente! ¡Así no!",
						"vietnamese": "Dừng lại! Không thể thế này được!",
						"thai": "หยุดนะ! แบบนี้ไม่ได้!",
						"hindi": "रुको! ऐसे नहीं चलेगा!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "(자기 손을 보며) 오염됐어… 전부 오염됐어!",
						"english": "(Looking at own hands) Contaminated... Everything's contaminated!",
						"japanese": "(自分の手を見て) 汚染された…全部汚染された！",
						"chinese": "(看着自己的手) 被污染了……全部被污染了！",
						"french": "(Regardant ses mains) Contaminé... Tout est contaminé !",
						"spanish": "(Mirándose las manos) Contaminado... ¡Todo está contaminado!",
						"vietnamese": "(Nhìn tay mình) Nhiễm bẩn rồi... Tất cả đều nhiễm bẩn rồi!",
						"thai": "(มองดูมือตัวเอง) ปนเปื้อนแล้ว... ทุกอย่างปนเปื้อนไปหมดแล้ว!",
						"hindi": "(अपने हाथों को देखकर) दूषित हो गया... सब कुछ दूषित हो गया है!"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "(애쉬의 상태를 보고 충격) 애쉬…!",
						"english": "(Shocked by Ash's state) Ash...!",
						"japanese": "(アッシュの状態を見て衝撃) アッシュ…！",
						"chinese": "(看到艾什的状态后震惊) 艾什……！",
						"french": "(Choqué par l'état d'Ash) Ash… !",
						"spanish": "(Conmocionado por el estado de Ash) ¡Ash...!",
						"vietnamese": "(Sốc trước tình trạng của Ash) Ash...!",
						"thai": "(ตกใจเมื่อเห็นสภาพของแอช) แอช...!",
						"hindi": "(ऐश की हालत देखकर स्तब्ध) ऐश...!"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "애쉬의 눈은 더러움을 향한 광기로 번뜩였다. 스스로도 예외는 아니었다.",
						"english": "Ash's eyes blazed with a manic hunger for impurity. She herself was not immune.",
						"japanese": "アッシュの目は汚れへの狂気で輝いていた。彼女自身も例外ではなかった。",
						"chinese": "艾什的眼睛闪烁着对污秽的狂热。她自己也无法幸免。",
						"french": "Les yeux d'Ash brillaient d'une folie pour l'impureté. Elle-même n'y faisait pas exception.",
						"spanish": "Los ojos de Ash brillaban con una locura por la inmundicia. Ni ella misma era la excepción.",
						"vietnamese": "Mắt Ash lấp lánh sự điên cuồng khao khát cái bẩn thỉu. Ngay cả cô ấy cũng không ngoại lệ.",
						"thai": "ดวงตาของแอชส่องประกายด้วยความบ้าคลั่งต่อความสกปรก แม้แต่ตัวเธอเองก็ไม่อาจหลีกหนีได้",
						"hindi": "ऐश की आँखें गंदगी के प्रति उन्माद से चमक रही थीं। वह खुद भी अपवाद नहीं थी।"
					},
					"speaker": "narrator"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "(기괴한 웃음) 더러운 자들이 감히… 여기까지 왔군.",
						"english": "(Grotesque laughter) Filthy ones dare... to come this far.",
						"japanese": "(奇妙な笑い声) 汚れた者どもがよくも…ここまで来たな。",
						"chinese": "(怪异的笑声) 肮脏的家伙竟敢……来到这里。",
						"french": "(Rire grotesque) Les immondes osent... venir jusqu'ici.",
						"spanish": "(Risa grotesca) ¡Los sucios se atreven... a llegar hasta aquí!",
						"vietnamese": "(Cười quái dị) Những kẻ dơ bẩn dám... đến tận đây sao.",
						"thai": "(หัวเราะประหลาด) พวกสกปรกกล้าดียังไง... มาถึงนี่ได้",
						"hindi": "(विकृत हँसी) गंदे लोग हिम्मत करते हैं... यहाँ तक आने की।"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "이 구역은… 내가 청소한다.",
						"english": "This sector... I will cleanse.",
						"japanese": "この区域は…私が清掃する。",
						"chinese": "这个区域……由我来清理。",
						"french": "Ce secteur... je le nettoierai.",
						"spanish": "Esta zona... yo la limpiaré.",
						"vietnamese": "Khu vực này... ta sẽ dọn dẹp.",
						"thai": "เขตนี้... ข้าจะทำความสะอาด",
						"hindi": "यह क्षेत्र... मैं साफ करूँगा।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "더러움이 죄가 아니야!",
						"english": "Impurity isn't a sin!",
						"japanese": "汚れは罪じゃない！",
						"chinese": "污秽不是罪！",
						"french": "L'impureté n'est pas un péché !",
						"spanish": "¡La suciedad no es un pecado!",
						"vietnamese": "Dơ bẩn không phải là tội lỗi!",
						"thai": "ความสกปรกไม่ใช่บาป!",
						"hindi": "गंदगी कोई पाप नहीं है!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "네놈이 지옥을 망쳤어!",
						"english": "You ruined hell!",
						"japanese": "てめえが地獄を台無しにした！",
						"chinese": "你毁了地狱！",
						"french": "Tu as ruiné l'enfer !",
						"spanish": "¡Has arruinado el infierno!",
						"vietnamese": "Ngươi đã phá hỏng địa ngục!",
						"thai": "แกทำลายนรก!",
						"hindi": "तुमने नर्क बर्बाद कर दिया!"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "(비웃듯이) 어리석은 것들. 진정한 깨끗함을 모르다니.",
						"english": "(Scoffing) Foolish creatures. You know not true purity.",
						"japanese": "(あざけるように) 愚かな者たち。真の清らかさを知らぬとは。",
						"chinese": "(嘲讽地) 愚蠢的东西。竟不知何为真正的洁净。",
						"french": "(D'un air moqueur) Créatures stupides. Vous ignorez la véritable pureté.",
						"spanish": "(Con desprecio) Estúpidos. No conocéis la verdadera pureza.",
						"vietnamese": "(Cười nhạo) Những kẻ ngu ngốc. Không biết sự thanh sạch thật sự là gì.",
						"thai": "(เยาะเย้ย) พวกโง่เง่า. ไม่รู้จักความสะอาดที่แท้จริงเอาเสียเลย",
						"hindi": "(मजाक उड़ाते हुए) मूर्ख प्राणी। तुम सच्ची पवित्रता नहीं जानते।"
					},
					"speaker": "random_boss"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "(경멸하듯이) 너희의 더러움이… 내 청소를 방해할 순 없어.",
						"english": "(Contemptuously) Your filth... cannot hinder my cleansing.",
						"japanese": "（軽蔑するように）お前たちの穢れが… 私の浄化を妨げることなどできない。",
						"chinese": "（轻蔑地）你们的污秽……无法阻碍我的净化。",
						"french": "(Avec mépris) Votre souillure... ne peut pas entraver ma purification.",
						"spanish": "(Con desprecio) Vuestra suciedad... no puede obstaculizar mi limpieza.",
						"vietnamese": "(Khinh bỉ) Sự dơ bẩn của các ngươi... không thể cản trở sự thanh tẩy của ta.",
						"thai": "(อย่างดูถูก) ความสกปรกของพวกเจ้า... ไม่อาจขัดขวางการชำระล้างของข้าได้",
						"hindi": "(घृणा से) तुम्हारी गंदगी... मेरी शुद्धि को रोक नहीं सकती।"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "아직… 끝나지 않았어!",
						"english": "It's not... over yet!",
						"japanese": "まだ… 終わってない！",
						"chinese": "还没……结束！",
						"french": "Ce n'est pas... encore fini !",
						"spanish": "¡Todavía... no ha terminado!",
						"vietnamese": "Vẫn chưa... kết thúc đâu!",
						"thai": "ยัง... ไม่จบ!",
						"hindi": "अभी तक... खत्म नहीं हुआ है!"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "이 오염된 지옥을 되돌릴 거야!",
						"english": "I will reverse this corrupted hell!",
						"japanese": "この汚染された地獄を元に戻してやる！",
						"chinese": "我要扭转这个被污染的地狱！",
						"french": "Je vais inverser cet enfer corrompu !",
						"spanish": "¡Revertiré este infierno contaminado!",
						"vietnamese": "Ta sẽ đảo ngược địa ngục ô uế này!",
						"thai": "ข้าจะพลิกฟื้นนรกที่แปดเปื้อนนี้!",
						"hindi": "मैं इस दूषित नर्क को बदल दूंगा!"
					},
					"speaker": "character_any"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"content": {
						"korean": "…결국… 나조차… 더러워지는 건가…",
						"english": "...In the end... even I... become tainted...?",
						"japanese": "…結局…私まで…汚れてしまうのか…",
						"chinese": "……到头来……连我……都变得肮脏了吗……",
						"french": "...Au final... même moi... je suis souillée...?",
						"spanish": "...Al final... ¿incluso yo... me ensucio...?",
						"vietnamese": "...Cuối cùng... ngay cả ta... cũng bị vấy bẩn sao...?",
						"thai": "...สุดท้าย... แม้แต่ข้า... ก็ต้องแปดเปื้อนงั้นหรือ...",
						"hindi": "...आखिरकार... क्या मैं भी... गंदा हो रहा हूँ...?"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "이겼어… 하지만…",
						"english": "We won... but...",
						"japanese": "勝った… けど…",
						"chinese": "我们赢了……但是……",
						"french": "Nous avons gagné... mais...",
						"spanish": "Ganamos... pero...",
						"vietnamese": "Chúng ta thắng rồi... nhưng mà...",
						"thai": "เราชนะ... แต่...",
						"hindi": "हम जीत गए... लेकिन..."
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이 깨끗함은… 대체 누구를 위한 거지?",
						"english": "This purity... who is it for?",
						"japanese": "この清らかさは… いったい誰のためなの？",
						"chinese": "这份纯净……究竟是为了谁？",
						"french": "Cette pureté... pour qui est-elle ?",
						"spanish": "¿Esta pureza... para quién es?",
						"vietnamese": "Sự trong sạch này... rốt cuộc là vì ai?",
						"thai": "ความบริสุทธิ์นี้... เพื่อใครกันแน่?",
						"hindi": "यह पवित्रता... आखिर किसके लिए है?"
					}
				},
				{
					"content": {
						"korean": "정화는 멈추지 않았다. 하지만 파괴된 보스는 작은 틈을 만들었다.",
						"english": "The purification didn't stop. But the destroyed boss created a small opening.",
						"japanese": "浄化は止まらなかった。しかし、破壊されたボスは小さな隙間を作った。",
						"chinese": "净化并未停止。但被摧毁的首领制造了一丝裂缝。",
						"french": "La purification ne s'est pas arrêtée. Mais le boss détruit a créé une petite brèche.",
						"spanish": "La purificación no se detuvo. Pero el jefe destruido creó una pequeña grieta.",
						"vietnamese": "Sự thanh lọc không ngừng lại. Nhưng tên trùm bị tiêu diệt đã tạo ra một khe hở nhỏ.",
						"thai": "การชำระล้างไม่หยุดลง แต่บอสที่ถูกทำลายได้สร้างช่องว่างเล็กๆ ขึ้นมา",
						"hindi": "शुद्धिकरण रुका नहीं। लेकिन पराजित बॉस ने एक छोटा सा छेद बना दिया।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "지옥은 여전히 침묵했고, 남은 자들은 질문을 시작했다.",
						"english": "Hell remained silent, and the survivors began to question.",
						"japanese": "地獄は依然として沈黙し、残された者たちは問いかけ始めた。",
						"chinese": "地狱依旧沉默，幸存者们开始质疑。",
						"french": "L'enfer resta silencieux, et les survivants commencèrent à se poser des questions.",
						"spanish": "El infierno permaneció en silencio, y los que quedaron comenzaron a cuestionar.",
						"vietnamese": "Địa ngục vẫn im lặng, và những người còn lại bắt đầu đặt câu hỏi.",
						"thai": "นรกยังคงเงียบงัน และผู้รอดชีวิตก็เริ่มตั้งคำถาม",
						"hindi": "नर्क अभी भी खामोश था, और बचे हुए लोगों ने सवाल करना शुरू कर दिया।"
					},
					"type": "speech",
					"emotion": "base"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"지옥은 숨을 멈췄다. 너무나 깨끗하게.",
			"모든 더러움이 사라진 곳에, 존재도 사라졌다.",
			"마지막 남은 절규가, 새로운 오염을 부를 때까지.",
			"청결은 축복인가, 저주인가."
		],
		"english": [
			"Hell held its breath. So pristinely clean.",
			"Where all impurity vanished, so too did existence.",
			"Until the last remaining scream summoned new contamination.",
			"Is cleanliness a blessing, or a curse?"
		],
		"japanese": [
			"地獄は息を止めた。あまりにも清らかに。",
			"全ての汚れが消えた場所に、存在も消えた。",
			"最後に残った絶叫が、新たな汚染を呼ぶまで。",
			"清潔は祝福か、呪いか。"
		],
		"chinese": [
			"地狱屏住了呼吸。如此洁净。",
			"所有污秽消失之处，存在亦随之消逝。",
			"直到最后一声绝望的呐喊，唤来新的污染。",
			"洁净是祝福，还是诅咒？"
		],
		"french": [
			"L'enfer a retenu son souffle. Si impeccablement propre.",
			"Là où toute impureté a disparu, l'existence a également disparu.",
			"Jusqu'à ce que le dernier cri restant invoque une nouvelle contamination.",
			"La propreté est-elle une bénédiction, ou une malédiction ?"
		],
		"spanish": [
			"El infierno contuvo el aliento. Tan impecablemente limpio.",
			"Donde toda impureza desapareció, también lo hizo la existencia.",
			"Hasta que el último grito restante invocó una nueva contaminación.",
			"¿Es la limpieza una bendición, o una maldición?"
		],
		"vietnamese": [
			"Địa ngục nín thở. Thật quá sạch sẽ.",
			"Nơi mọi ô uế tan biến, sự tồn tại cũng biến mất.",
			"Cho đến khi tiếng kêu cuối cùng còn sót lại, gọi ra ô nhiễm mới.",
			"Sự trong sạch là phước lành, hay lời nguyền?"
		],
		"thai": [
			"นรกกลั้นหายใจ สะอาดหมดจดเกินไป",
			"ที่ซึ่งความสกปรกทั้งหมดหายไป การคงอยู่ก็หายไปด้วย",
			"จนกว่าเสียงกรีดร้องสุดท้ายที่เหลืออยู่จะเรียกมลพิษใหม่มา",
			"ความสะอาดเป็นพรหรือคำสาป?"
		],
		"hindi": [
			"नर्क ने अपनी सांस रोक ली। इतनी बेदाग़ साफ़।",
			"जहां सारी गंदगी गायब हो गई, वहां अस्तित्व भी मिट गया।",
			"जब तक आखिरी बची हुई चीख एक नया प्रदूषण नहीं बुला लेती।",
			"क्या स्वच्छता एक वरदान है, या अभिशाप?"
		]
	}
} as const;
