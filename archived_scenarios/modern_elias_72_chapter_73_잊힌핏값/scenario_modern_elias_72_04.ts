export const scenario_modern_elias_72_04 = {
	"scenario_id": "modern_elias_72_04",
	"order": 4,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"dax": {
			"id": "mon_08d5b43e-f9ab-4469-9064-855e170b0cdc",
			"name": {
				"korean": "닥스",
				"english": "Dax",
				"japanese": "ダックス",
				"chinese": "达克斯",
				"french": "Dax",
				"spanish": "Dax",
				"vietnamese": "Dax",
				"thai": "แด็กซ์",
				"hindi": "डैक्स"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/84bb11db-6eb4-4500-d274-222e8b100100/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/5d325a75-bd91-4758-7b3f-ad9a97e52700/public"
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
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "닥스는 엘리아스의 자료를 훑었다. 무기력한 눈빛, 비정상적인 침묵.",
						"english": "Daxs scanned Elias's files. Listless eyes, abnormal silence.",
						"japanese": "ダックスはエリアスの資料を読み込んだ。無気力な瞳、異常な沈黙。",
						"chinese": "达克斯浏览着埃利亚斯的资料。无力的眼神，异常的沉默。",
						"french": "Daxs parcourut les dossiers d'Elias. Des yeux apathiques, un silence anormal.",
						"spanish": "Daxs revisó los archivos de Elias. Ojos apáticos, un silencio anormal.",
						"vietnamese": "Daxs lướt qua hồ sơ của Elias. Đôi mắt vô hồn, sự im lặng bất thường.",
						"thai": "แด็กซ์ไล่ดูเอกสารของอีไลอัส ดวงตาไร้เรี่ยวแรง ความเงียบที่ผิดปกติ",
						"hindi": "डैक्स ने एलियास की फाइलें खंगालीं। बेजान आँखें, असामान्य चुप्पी।"
					},
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "(의아한 듯) 왜 그렇게 엘리아스에게 집착하는 거야, 닥스?",
						"english": "(Puzzled) Why are you so fixated on Elias, Daxs?",
						"japanese": "（訝しげに）なぜそんなにエリアスに執着するんだ、ダックス？",
						"chinese": "（疑惑地）达克斯，你为什么对埃利亚斯如此执着？",
						"french": "(Perplexe) Pourquoi es-tu si obsédé par Elias, Daxs ?",
						"spanish": "(Perplejo) ¿Por qué estás tan obsesionado con Elias, Daxs?",
						"vietnamese": "(Có vẻ khó hiểu) Sao cậu lại cứ ám ảnh Elias thế, Daxs?",
						"thai": "(สงสัย) ทำไมนายถึงได้หมกมุ่นอยู่กับอีไลอัสมากขนาดนั้น แด็กซ์?",
						"hindi": "(हैरानी से) तुम एलियास पर इतनी ज़िद क्यों कर रहे हो, डैक्स?"
					}
				},
				{
					"action": "enter",
					"speaker": "dax",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"type": "direction"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "...직감이야. 저 무기력함 뒤에 뭔가 더 있어.",
						"english": "...It's a hunch. There's something more behind that listlessness.",
						"japanese": "…直感だ。あの無気力さの裏に、何かがある。",
						"chinese": "……这是直觉。那种无力感背后，还有别的东西。",
						"french": "...C'est une intuition. Il y a quelque chose de plus derrière cette apathie.",
						"spanish": "...Es una corazonada. Hay algo más detrás de esa apatía.",
						"vietnamese": "...Là linh cảm. Đằng sau sự vô hồn đó, còn có điều gì đó nữa.",
						"thai": "...มันเป็นลางสังหรณ์ มีบางอย่างซ่อนอยู่เบื้องหลังความไร้เรี่ยวแรงนั่น",
						"hindi": "...यह एक अंतर्ज्ञान है। उस बेजानपन के पीछे कुछ और है।"
					}
				},
				{
					"content": {
						"korean": "단순한 피해자가 아닐지도 몰라.",
						"english": "He might not just be a victim.",
						"japanese": "単なる被害者ではないかもしれない。",
						"chinese": "他可能不只是一个单纯的受害者。",
						"french": "Il n'est peut-être pas qu'une simple victime.",
						"spanish": "Puede que no sea solo una víctima.",
						"vietnamese": "Anh ta có thể không chỉ là một nạn nhân.",
						"thai": "เขาอาจจะไม่ใช่แค่เหยื่อ",
						"hindi": "वह सिर्फ एक पीड़ित नहीं हो सकता है।"
					},
					"speaker": "dax",
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						2,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "dax"
				},
				{
					"content": {
						"korean": "엘리아스의 출생 기록. 묘하게 빠진 시간들이 있어.",
						"english": "Elias's birth records. There are strangely missing periods.",
						"japanese": "エリアスの出生記録。奇妙に空白の期間がある。",
						"chinese": "埃利亚斯的出生记录。有些时间段奇怪地缺失了。",
						"french": "L'acte de naissance d'Elias. Il y a des périodes étrangement manquantes.",
						"spanish": "Los registros de nacimiento de Elias. Hay períodos extrañamente ausentes.",
						"vietnamese": "Hồ sơ khai sinh của Elias. Có những khoảng thời gian bị thiếu một cách kỳ lạ.",
						"thai": "บันทึกการเกิดของอีไลอัส มีช่วงเวลาที่หายไปอย่างแปลกประหลาด",
						"hindi": "एलियास के जन्म रिकॉर्ड। कुछ अजीब से गायब समय हैं।"
					},
					"speaker": "dax",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_1",
					"content": {
						"korean": "빠진 시간? 뭘 말하는 거야?",
						"english": "Missing time? What are you talking about?",
						"japanese": "失われた時間？何を言ってるんだ？",
						"chinese": "失去的时间？你在说什么？",
						"french": "Du temps manquant ? De quoi parles-tu ?",
						"spanish": "¿Tiempo perdido? ¿De qué hablas?",
						"vietnamese": "Thời gian bị mất? Anh đang nói gì vậy?",
						"thai": "เวลาที่หายไป? นายพูดถึงอะไร?",
						"hindi": "गुमशुदा वक्त? तुम किस बारे में बात कर रहे हो?"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "그리고… 과거 조직에게 희생된, 실종된 자들의 기록.",
						"english": "And… records of those sacrificed and missing by the former organization.",
						"japanese": "そして…かつての組織に犠牲にされ、行方不明になった者たちの記録。",
						"chinese": "还有……过去被组织牺牲的失踪者记录。",
						"french": "Et… les registres des disparus, sacrifiés par l'ancienne organisation.",
						"spanish": "Y… los registros de aquellos sacrificados y desaparecidos por la antigua organización.",
						"vietnamese": "Và… hồ sơ của những người đã mất tích, bị hy sinh bởi tổ chức cũ.",
						"thai": "และ...บันทึกของผู้ที่หายสาบสูญและถูกสังเวยโดยองค์กรเก่า",
						"hindi": "और… उस पुराने संगठन द्वारा बलिदान किए गए और लापता लोगों के रिकॉर्ड।"
					}
				},
				{
					"content": {
						"korean": "한 사람의 기록이 자꾸 걸려.",
						"english": "One person's record keeps bothering me.",
						"japanese": "ある一人の記録が、ずっと引っかかっている。",
						"chinese": "一个人的记录总是让我很在意。",
						"french": "Le dossier d'une personne me tracasse sans cesse.",
						"spanish": "El registro de una persona no deja de molestarme.",
						"vietnamese": "Hồ sơ của một người cứ khiến tôi bận tâm.",
						"thai": "บันทึกของคนคนหนึ่งคอยกวนใจฉันอยู่เรื่อยๆ",
						"hindi": "एक व्यक्ति का रिकॉर्ड मुझे बार-बार परेशान कर रहा है।"
					},
					"speaker": "dax",
					"type": "speech",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "dax",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						4,
						2
					],
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그 실종 기록과 엘리아스의 출생 기록…",
						"english": "That disappearance record and Elias's birth record…",
						"japanese": "その失踪記録とエリアスの出生記録…",
						"chinese": "那份失踪记录和埃利亚斯的出生记录……",
						"french": "Ce dossier de disparition et l'acte de naissance d'Elias…",
						"spanish": "Ese registro de desaparición y el certificado de nacimiento de Elías…",
						"vietnamese": "Hồ sơ mất tích đó và giấy khai sinh của Elias…",
						"thai": "บันทึกการหายตัวไปนั้นกับบันทึกการเกิดของอีเลียส...",
						"hindi": "वह गुमशुदगी का रिकॉर्ड और एलियास का जन्म रिकॉर्ड…"
					},
					"speaker": "dax"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "시간적, 공간적으로 너무 겹쳐. 우연이 아니야.",
						"english": "They overlap too much, chronologically and spatially. It's no coincidence.",
						"japanese": "時間的、空間的にあまりにも重なりすぎている。偶然じゃない。",
						"chinese": "时间上、空间上都太重合了。这不是巧合。",
						"french": "Ils se chevauchent trop, temporellement et spatialement. Ce n'est pas une coïncidence.",
						"spanish": "Se superponen demasiado, cronológica y espacialmente. No es una coincidencia.",
						"vietnamese": "Chúng trùng lặp quá nhiều về thời gian và không gian. Không phải là trùng hợp đâu.",
						"thai": "มันทับซ้อนกันมากเกินไป ทั้งด้านเวลาและพื้นที่ นี่ไม่ใช่เรื่องบังเอิญ",
						"hindi": "वे कालानुक्रमिक और स्थानिक रूप से बहुत अधिक ओवरलैप होते हैं। यह कोई संयोग नहीं है।"
					}
				},
				{
					"speaker": "character_2",
					"content": {
						"korean": "(충격받은 듯) 설마…",
						"english": "(Shocked) No way…",
						"japanese": "(衝撃を受けたように) まさか…",
						"chinese": "(震惊) 难道说……",
						"french": "(Choqué) Non, ce n'est pas possible…",
						"spanish": "(Conmocionado) No puede ser…",
						"vietnamese": "(Bàng hoàng) Không lẽ…",
						"thai": "(ตกใจ) ไม่นะ...",
						"hindi": "(हैरान) कहीं ऐसा तो नहीं..."
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "가해자와 피해자. 그 입장이 뒤바뀌었을 가능성.",
						"english": "The possibility that the roles of perpetrator and victim have been reversed.",
						"japanese": "加害者と被害者。その立場が逆転した可能性。",
						"chinese": "加害者和被害者。立场可能已经颠倒了。",
						"french": "La possibilité que les rôles de l'agresseur et de la victime aient été inversés.",
						"spanish": "La posibilidad de que los papeles del agresor y la víctima se hayan invertido.",
						"vietnamese": "Khả năng vị trí của kẻ gây án và nạn nhân đã bị đảo ngược.",
						"thai": "ความเป็นไปได้ที่บทบาทของผู้กระทำผิดและเหยื่อจะถูกสลับกัน",
						"hindi": "अपराधी और पीड़ित की भूमिकाएँ बदल गई हों, इसकी संभावना।"
					},
					"speaker": "dax",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "(믿을 수 없다는 듯) 말도 안 돼…!",
						"english": "(Disbelieving) That's impossible…!",
						"japanese": "(信じられないといった様子で) まさか…！",
						"chinese": "(难以置信) 不可能……！",
						"french": "(Incrédule) C'est absurde… !",
						"spanish": "(Incrédulo) ¡Imposible…!",
						"vietnamese": "(Không thể tin được) Vô lý quá…!",
						"thai": "(ไม่เชื่อ) เป็นไปไม่ได้...!",
						"hindi": "(अविश्वास से) यह नहीं हो सकता...!"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"type": "direction",
					"speaker": "dax",
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그 조직은 '핏값'에 집착했어.",
						"english": "The organization was obsessed with 'blood price'.",
						"japanese": "その組織は「血の代償」に執着していた。",
						"chinese": "那个组织执着于“血的代价”。",
						"french": "Cette organisation était obsédée par le 'prix du sang'.",
						"spanish": "Esa organización estaba obsesionada con el 'precio de la sangre'.",
						"vietnamese": "Tổ chức đó ám ảnh bởi 'giá máu'.",
						"thai": "องค์กรนั้นหมกมุ่นอยู่กับ 'ค่าเลือด'",
						"hindi": "वह संगठन 'खून की कीमत' के प्रति जुनूनी था।"
					},
					"speaker": "dax"
				},
				{
					"content": {
						"korean": "누군가의 피로 죄를 씻고, 그 피를 이식해 새로운 존재를 만들었다면?",
						"english": "What if they cleansed sins with someone's blood and then used that blood for a transfusion to create a new being?",
						"japanese": "もし、誰かの血で罪を清め、その血を移植して新たな存在を作り出したとしたら？",
						"chinese": "如果他们用某人的血来洗清罪孽，然后移植那份血来创造新的存在呢？",
						"french": "Et s'ils avaient purifié les péchés avec le sang de quelqu'un, puis utilisé ce sang pour une transfusion afin de créer un nouvel être ?",
						"spanish": "¿Y si hubieran purificado los pecados con la sangre de alguien, y luego usado esa sangre para un trasplante para crear un nuevo ser?",
						"vietnamese": "Nếu họ dùng máu của ai đó để rửa tội, rồi cấy máu đó để tạo ra một thực thể mới thì sao?",
						"thai": "ถ้าพวกเขาล้างบาปด้วยเลือดของใครบางคน แล้วใช้เลือดนั้นปลูกถ่ายเพื่อสร้างสิ่งมีชีวิตใหม่ล่ะ?",
						"hindi": "क्या होगा अगर उन्होंने किसी के खून से पाप धोए, और फिर उस खून का प्रत्यारोपण करके एक नई सत्ता बनाई हो?"
					},
					"speaker": "dax",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "(경악하며) 그럼 엘리아스는…!",
						"english": "(Horrified) Then Elias...!",
						"japanese": "(驚愕して) ならばエリアスは…！",
						"chinese": "(震惊) 那么伊莱亚斯是…！",
						"french": "(Horrifié) Alors Elias… !",
						"spanish": "(Horrorizado) ¡Entonces Elias...!",
						"vietnamese": "(Kinh hãi) Vậy Elias là...!",
						"thai": "(ตกใจสุดขีด) ถ้าอย่างนั้นเอเลียสก็...!",
						"hindi": "(भयभीत होकर) तो एलियास...!"
					},
					"speaker": "character_3"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "dax",
					"content": {
						"korean": "핏값의 증거. 스스로 걸어 다니는 죄책감.",
						"english": "Proof of blood money. Guilt walking on its own.",
						"japanese": "血の代償の証。自ら歩く罪悪感。",
						"chinese": "血债的证据。自行走动的罪恶感。",
						"french": "Preuve du prix du sang. La culpabilité qui marche d'elle-même.",
						"spanish": "La prueba del precio de la sangre. La culpa que camina por sí sola.",
						"vietnamese": "Bằng chứng của giá máu. Nỗi dằn vặt tự bước đi.",
						"thai": "หลักฐานของค่าไถ่เลือด ความรู้สึกผิดที่เดินได้เอง",
						"hindi": "रक्त के मूल्य का प्रमाण। स्वयं चलता हुआ अपराधबोध।"
					}
				},
				{
					"content": {
						"korean": "(끓어오르는 분노) 분노가 치밀어 오른다…!",
						"english": "(Seething with rage) Rage boils within me...!",
						"japanese": "(込み上げる怒り) 怒りがこみ上げてくる…！",
						"chinese": "(怒火中烧) 怒火中烧…！",
						"french": "(Fureur montante) La rage monte en moi… !",
						"spanish": "(Furia hirviendo) ¡La ira me consume...!",
						"vietnamese": "(Giận dữ tột độ) Cơn thịnh nộ trỗi dậy…!",
						"thai": "(ความโกรธเดือดพล่าน) ความโกรธปะทุขึ้นมา...!",
						"hindi": "(उबलता हुआ क्रोध) क्रोध उमड़ रहा है...!"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "(기괴한 웃음) 여기까지 온 자, 진실은 감당할 수 있겠나?",
						"english": "(Grotesque laugh) You who have come this far, can you bear the truth?",
						"japanese": "(奇怪な笑い) ここまで来た者よ、真実を耐えうるか？",
						"chinese": "(诡异的笑声) 走到这里的人，能承受真相吗？",
						"french": "(Rire grotesque) Toi qui es venu jusqu'ici, peux-tu supporter la vérité ?",
						"spanish": "(Risa grotesca) Tú que has llegado hasta aquí, ¿podrás soportar la verdad?",
						"vietnamese": "(Cười quái dị) Kẻ đã đến đây, ngươi có chịu đựng nổi sự thật không?",
						"thai": "(หัวเราะอย่างประหลาด) เจ้าผู้มาถึงที่นี่ เจ้าจะรับความจริงได้หรือไม่?",
						"hindi": "(भयानक हँसी) यहाँ तक आए हो, क्या तुम सच सहन कर पाओगे?"
					},
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "너는 진실을 가릴 수 없어!",
						"english": "You cannot hide the truth!",
						"japanese": "お前は真実を隠せない！",
						"chinese": "你无法掩盖真相！",
						"french": "Tu ne peux pas cacher la vérité !",
						"spanish": "¡No puedes ocultar la verdad!",
						"vietnamese": "Ngươi không thể che giấu sự thật!",
						"thai": "เจ้าไม่อาจซ่อนเร้นความจริงได้!",
						"hindi": "तुम सच छुपा नहीं सकते!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"action": "enter",
					"speaker": "dax",
					"duration_ms": 500,
					"spot": [
						2,
						2
					],
					"type": "direction"
				},
				{
					"speaker": "dax",
					"content": {
						"korean": "녀석은 진실의 수호자가 아냐. 그저 파수꾼일 뿐.",
						"english": "He is not the guardian of truth. He is merely a warden.",
						"japanese": "あいつは真実の守護者じゃない。ただの番人に過ぎない。",
						"chinese": "他不是真相的守护者。他只是一个看守。",
						"french": "Il n'est pas le gardien de la vérité. Il n'est qu'un simple geôlier.",
						"spanish": "Él no es el guardián de la verdad. Es solo un carcelero.",
						"vietnamese": "Hắn không phải người bảo vệ sự thật. Hắn chỉ là một kẻ canh gác.",
						"thai": "มันไม่ใช่ผู้พิทักษ์ความจริง มันเป็นแค่ผู้คุมเท่านั้น",
						"hindi": "वह सत्य का संरक्षक नहीं है। वह केवल एक पहरेदार है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "(일그러진 목소리) 닥스… 네놈이 감히!",
						"english": "(Distorted voice) Daks... How dare you!",
						"japanese": "(歪んだ声) ダックス…貴様、よくも！",
						"chinese": "(扭曲的声音) 达克斯…你竟敢！",
						"french": "(Voix déformée) Daks... Comment oses-tu !",
						"spanish": "(Voz distorsionada) ¡Daks... cómo te atreves!",
						"vietnamese": "(Giọng nói méo mó) Daks… Ngươi dám sao!",
						"thai": "(เสียงบิดเบี้ยว) แด็กซ์... แกกล้าดียังไง!",
						"hindi": "(विकृत आवाज़) डैक्स... तुम्हारी हिम्मत कैसे हुई!"
					},
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "dax",
					"action": "exit",
					"type": "direction",
					"direction": "down",
					"duration_ms": 400
				},
				{
					"content": {
						"korean": "내 안의 핏값을… 감당해 보시지.",
						"english": "Endure the blood debt within me... if you can.",
						"japanese": "私の中の血の代償を…耐えてみろ。",
						"chinese": "承受我体内的血债…试试看吧。",
						"french": "Supporte le prix du sang en moi... si tu l'oses.",
						"spanish": "Soporta el precio de la sangre dentro de mí... si puedes.",
						"vietnamese": "Hãy gánh chịu giá máu trong ta… nếu ngươi có thể.",
						"thai": "จงแบกรับค่าไถ่เลือดในตัวข้า... ถ้าเจ้าทำได้",
						"hindi": "मेरे भीतर के रक्त के मूल्य को... सह कर दिखाओ।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "어리석은 것들. 핏값은 절대 지워지지 않아.",
						"english": "Fools. Blood debts are never erased.",
						"japanese": "愚かな者たち。血の代償は決して消えない。",
						"chinese": "愚蠢的东西。血债永远无法抹去。",
						"french": "Idiots. Le prix du sang ne s'efface jamais.",
						"spanish": "Estúpidos. Las deudas de sangre nunca se borran.",
						"vietnamese": "Những kẻ ngốc. Món nợ máu sẽ không bao giờ được xóa bỏ.",
						"thai": "พวกโง่เง่า! หนี้เลือดไม่มีวันลบเลือน",
						"hindi": "मूर्ख। खून का कर्ज कभी मिटता नहीं।"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "젠장… 다시…",
						"english": "Damn it... Again...",
						"japanese": "くそっ… またか…",
						"chinese": "该死…… 再来……",
						"french": "Merde... Encore...",
						"spanish": "Maldita sea... Otra vez...",
						"vietnamese": "Chết tiệt... Lại nữa...",
						"thai": "ให้ตายสิ... อีกแล้วเหรอ...",
						"hindi": "धिक्कार है... फिर से..."
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "이 굴레는 영원하다.",
						"english": "This vicious cycle is eternal.",
						"japanese": "この輪廻は永遠だ。",
						"chinese": "这个轮回是永恒的。",
						"french": "Ce cycle est éternel.",
						"spanish": "Este ciclo es eterno.",
						"vietnamese": "Vòng luẩn quẩn này là vĩnh cửu.",
						"thai": "วงจรนี้เป็นนิรันดร์",
						"hindi": "यह बंधन शाश्वत है।"
					},
					"type": "speech",
					"emotion": "angry"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "크윽… 결국… 이 굴레는…",
						"english": "Ugh... In the end... this cycle...",
						"japanese": "くっ…結局…この輪廻は…",
						"chinese": "咳…最终…这个枷锁…",
						"french": "Ugh... Finalement... ce cycle...",
						"spanish": "Ugh... Al final... este ciclo...",
						"vietnamese": "Khụ… Rốt cuộc… Cái vòng luẩn quẩn này…",
						"thai": "อึก... ในที่สุด... วงเวียนนี้ก็...",
						"hindi": "उह... आखिर... यह बंधन..."
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "굴레는 끝났어.",
						"english": "The cycle is over.",
						"japanese": "輪廻は終わった。",
						"chinese": "枷锁已断。",
						"french": "Le cycle est rompu.",
						"spanish": "El ciclo ha terminado.",
						"vietnamese": "Vòng luẩn quẩn đã kết thúc.",
						"thai": "วงเวียนจบลงแล้ว",
						"hindi": "बंधन समाप्त हो गया।"
					}
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						2
					],
					"speaker": "dax",
					"action": "enter"
				},
				{
					"content": {
						"korean": "끝이 아냐. 이건 시작일 뿐.",
						"english": "This isn't the end. It's just the beginning.",
						"japanese": "終わりじゃない。これは始まりに過ぎない。",
						"chinese": "这不是结束，这只是开始。",
						"french": "Ce n'est pas la fin. Ce n'est que le début.",
						"spanish": "No es el final. Es solo el principio.",
						"vietnamese": "Đây không phải là kết thúc. Đây chỉ là khởi đầu.",
						"thai": "นี่ไม่ใช่จุดจบ แต่นี่คือจุดเริ่มต้นเท่านั้น",
						"hindi": "यह अंत नहीं है। यह सिर्फ शुरुआत है।"
					},
					"speaker": "dax",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "닥스는 엘리아스의 기록을 다시 펼쳤다. 그 안에서 새로운 그림자가 꿈틀거렸다.",
						"english": "Dax reopened Elias's records. A new shadow stirred within them.",
						"japanese": "ダックスはエリアスの記録を再び開いた。その中で、新たな影が蠢いていた。",
						"chinese": "达克斯再次展开了伊利亚斯的记录。新的影子在其中蠢蠢欲动。",
						"french": "Dax rouvrit les archives d'Elias. Une nouvelle ombre s'y agitait.",
						"spanish": "Dax volvió a abrir los registros de Elías. Una nueva sombra se agitaba en ellos.",
						"vietnamese": "Dax mở lại hồ sơ của Elias. Một bóng tối mới đang cựa quậy bên trong.",
						"thai": "แด็กซ์เปิดบันทึกของเอเลียสอีกครั้ง เงาใหม่เริ่มขยับไหวอยู่ข้างในนั้น",
						"hindi": "डैक्स ने एलियास के अभिलेखों को फिर से खोला। उनमें एक नई छाया हिलने लगी।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "아직, 감춰진 진실은 더 깊이 잠들어 있었다.",
						"english": "The hidden truth still lay dormant, deeper.",
						"japanese": "まだ、隠された真実はさらに深く眠っていた。",
						"chinese": "然而，隐藏的真相依然沉睡得更深。",
						"french": "Pourtant, la vérité cachée dormait plus profondément encore.",
						"spanish": "Aún así, la verdad oculta dormía más profundamente.",
						"vietnamese": "Tuy nhiên, sự thật bị che giấu vẫn đang ngủ sâu hơn.",
						"thai": "ทว่าความจริงที่ซ่อนอยู่ยังคงหลับใหลลึกกว่าเดิม",
						"hindi": "फिर भी, छिपी हुई सच्चाई और भी गहरी नींद में थी।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"엘리아스. 무기력한 눈빛 뒤, 죄책감의 그림자.",
			"닥스는 직감했다. 이건 단순한 비극이 아니라고.",
			"출생 기록과 실종 파일. 겹쳐진 두 시간선.",
			"가해자와 피해자, 그 잔혹한 경계가 무너진다.",
			"분노는 이제, 새로운 진실을 향한다."
		],
		"english": [
			"Elias. Behind his listless eyes, a shadow of guilt.",
			"Daxs instinctively knew. This was no mere tragedy.",
			"Birth records and missing person files. Two timelines intertwined.",
			"Perpetrator and victim, that cruel boundary collapses.",
			"Now, anger turns toward a new truth."
		],
		"japanese": [
			"エリアス。その無気力な瞳の奥に、罪悪感の影。",
			"ダックスは直感した。これは単なる悲劇ではないと。",
			"出生記録と失踪ファイル。重なり合う二つの時間線。",
			"加害者と被害者、その残酷な境界が崩れる。",
			"怒りは今、新たな真実へと向かう。"
		],
		"chinese": [
			"埃利亚斯。在他无力的眼神背后，是罪恶的阴影。",
			"达克斯直觉地感到。这不是一场简单的悲剧。",
			"出生记录和失踪档案。两条时间线重叠。",
			"加害者与受害者，那残酷的界限正在崩塌。",
			"愤怒现在，指向新的真相。"
		],
		"french": [
			"Elias. Derrière ses yeux apathiques, l'ombre de la culpabilité.",
			"Daxs le sentit. Ce n'était pas une simple tragédie.",
			"Actes de naissance et dossiers de disparition. Deux lignes temporelles entrelacées.",
			"Bourreau et victime, cette frontière cruelle s'effondre.",
			"La colère, désormais, se tourne vers une nouvelle vérité."
		],
		"spanish": [
			"Elias. Detrás de sus ojos apáticos, una sombra de culpa.",
			"Daxs lo intuyó. Esto no era una simple tragedia.",
			"Registros de nacimiento y archivos de personas desaparecidas. Dos líneas temporales superpuestas.",
			"Agresor y víctima, esa cruel frontera se derrumba.",
			"La ira, ahora, se dirige hacia una nueva verdad."
		],
		"vietnamese": [
			"Elias. Đằng sau đôi mắt vô hồn, là bóng dáng tội lỗi.",
			"Daxs linh cảm. Đây không phải là một bi kịch đơn thuần.",
			"Hồ sơ khai sinh và hồ sơ mất tích. Hai dòng thời gian chồng chéo.",
			"Kẻ gây án và nạn nhân, ranh giới tàn khốc ấy sụp đổ.",
			"Giờ đây, cơn giận hướng về một sự thật mới."
		],
		"thai": [
			"อีไลอัส เบื้องหลังดวงตาที่ไร้เรี่ยวแรง คือเงามืดแห่งความรู้สึกผิด",
			"แด็กซ์รู้โดยสัญชาตญาณ นี่ไม่ใช่แค่โศกนาฏกรรม",
			"บันทึกการเกิดและแฟ้มคนหาย สองช่วงเวลาที่ทับซ้อนกัน",
			"ผู้กระทำและเหยื่อ เส้นแบ่งที่โหดร้ายนั้นพังทลายลง",
			"ความโกรธแค้นกำลังพุ่งเป้าไปสู่ความจริงใหม่"
		],
		"hindi": [
			"एलियास। उसकी बेजान आँखों के पीछे, अपराधबोध की छाया।",
			"डैक्स ने सहज रूप से महसूस किया। यह सिर्फ एक त्रासदी नहीं थी।",
			"जन्म रिकॉर्ड और गुमशुदा व्यक्तियों की फाइलें। दो समयरेखाएँ आपस में जुड़ी हुईं।",
			"अपराधी और शिकार, वह क्रूर सीमा टूट जाती है।",
			"अब, क्रोध एक नई सच्चाई की ओर बढ़ता है।"
		]
	}
} as const;
