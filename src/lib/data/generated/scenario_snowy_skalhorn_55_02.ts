export const scenario_snowy_skalhorn_55_02 = {
	"scenario_id": "snowy_skalhorn_55_02",
	"order": 2,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"ivar": {
			"id": "mon_d8a80adc-9315-47b5-8c30-97ce33672bce",
			"name": {
				"korean": "이바르",
				"english": "Ivar",
				"japanese": "イヴァー",
				"chinese": "伊瓦尔",
				"french": "Ivar",
				"spanish": "Ivar",
				"vietnamese": "Ivar",
				"thai": "ไอวาร์",
				"hindi": "इवर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8dd7872b-d4df-44fd-b1a1-083a9156e700/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/2622fb62-daf4-42d1-a83b-2b78869d3e00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"뿔잔의 웅얼거림이 잦아든 골.",
			"잠시 숨을 고르는 사이, 한 질문이 떠올랐다.",
			"우리의 신념은 어디에서 광기가 되는가.",
			"진실을 마주할 때마다, 그 경계는 흐려졌다."
		],
		"english": [
			"The horn's whispers faded in the hollow.",
			"As we paused for breath, a question surfaced.",
			"Where does faith become madness?",
			"Each time we faced the truth, that boundary blurred."
		],
		"japanese": [
			"角杯のささやきが静まった谷。",
			"息を整える間、一つの疑問が浮かんだ。",
			"我々の信念はどこで狂気となるのか。",
			"真実と向き合うたびに、その境界は曖昧になった。"
		],
		"chinese": [
			"号角低语在山谷中平息。",
			"喘息之间，一个疑问浮上心头。",
			"我们的信仰何时会变成疯狂？",
			"每当面对真相，那界限便模糊不清。"
		],
		"french": [
			"Le murmure du cor s'est tu dans la vallée.",
			"Pendant que je reprenais mon souffle, une question surgit.",
			"Où notre conviction tourne-t-elle à la folie ?",
			"Chaque fois que nous affrontions la vérité, cette frontière s'estompait."
		],
		"spanish": [
			"El murmullo del cuerno se aquietó en el valle.",
			"Mientras recuperaba el aliento, una pregunta surgió.",
			"¿Dónde nuestra convicción se vuelve locura?",
			"Cada vez que enfrentábamos la verdad, ese límite se difuminaba."
		],
		"vietnamese": [
			"Lời thì thầm của sừng đã dịu đi trong thung lũng.",
			"Trong lúc lấy lại hơi, một câu hỏi nảy ra.",
			"Niềm tin của chúng ta biến thành điên rồ từ đâu?",
			"Mỗi khi đối mặt với sự thật, ranh giới đó lại mờ đi."
		],
		"thai": [
			"เสียงกระซิบของแตรสงบลงในหุบเขา",
			"ขณะหยุดพักหายใจ คำถามหนึ่งก็ผุดขึ้นมา",
			"ความเชื่อของเรากลายเป็นความบ้าคลั่งที่ไหน",
			"ทุกครั้งที่เผชิญหน้ากับความจริง ขอบเขตนั้นก็พร่าเลือน"
		],
		"hindi": [
			"सींग की फुसफुसाहट घाटी में शांत हो गई।",
			"साँस लेने के दौरान, एक सवाल उठा।",
			"हमारी आस्था कब उन्माद में बदल जाती है?",
			"जब भी हमने सच का सामना किया, वह सीमा धुंधली हो गई।"
		]
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
						"korean": "뿔잔의 노랫소리가 잠시 잦아든 골이었다. 귀를 막았던 손을 내렸다.",
						"english": "The horn's song quieted in the hollow. I lowered my hands from my ears.",
						"japanese": "角杯の歌声が一時的に静まった谷だった。耳を塞いでいた手を下ろした。",
						"chinese": "号角的歌声在山谷中暂时平息。我放下了捂住耳朵的手。",
						"french": "Le chant du cor s'était tu un instant dans la vallée. J'ai baissé les mains qui couvraient mes oreilles.",
						"spanish": "El canto del cuerno se había aquietado en el valle. Bajé las manos que cubrían mis oídos.",
						"vietnamese": "Tiếng hát của sừng đã dịu đi trong thung lũng. Tôi hạ tay đang bịt tai xuống.",
						"thai": "เพลงของแตรสงบลงชั่วขณะในหุบเขา ข้าลดมือที่ปิดหูลง",
						"hindi": "सींग का गीत घाटी में क्षण भर के लिए शांत हो गया। मैंने अपने कानों को ढकने वाले हाथ नीचे कर लिए।"
					}
				},
				{
					"speaker": "ivar",
					"action": "enter",
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"emotion": "base",
					"speaker": "ivar",
					"type": "speech",
					"content": {
						"korean": "...신념. 우리가 믿는 게 옳을까?",
						"english": "...Faith. Are we truly in the right?",
						"japanese": "…信念。我々の信じていることは正しいのか？",
						"chinese": "……信仰。我们所相信的是正确的吗？",
						"french": "...Conviction. Ce que nous croyons est-il juste ?",
						"spanish": "...Convicción. ¿Lo que creemos es correcto?",
						"vietnamese": "...Niềm tin. Điều chúng ta tin là đúng sao?",
						"thai": "...ความเชื่อ สิ่งที่เราเชื่อนั้นถูกต้องแล้วหรือ?",
						"hindi": "...आस्था। क्या हम जो मानते हैं, वह सही है?"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "무슨 소리야. 당연히 옳지.",
						"english": "What nonsense. Of course it is.",
						"japanese": "何を言ってるんだ。当然、正しいだろ。",
						"chinese": "你在说什么？当然是正确的。",
						"french": "Qu'est-ce que tu racontes ? Bien sûr que c'est juste.",
						"spanish": "¿De qué hablas? Por supuesto que es correcto.",
						"vietnamese": "Cậu nói gì vậy? Đương nhiên là đúng rồi.",
						"thai": "พูดอะไรน่ะ? แน่นอนว่าถูกต้องสิ",
						"hindi": "क्या बकवास है। बेशक यह सही है।"
					}
				},
				{
					"emotion": "sad",
					"speaker": "ivar",
					"type": "speech",
					"content": {
						"korean": "정말? 저 광기 어린 찬가를 들었어? 그들도 그들의 신념을 믿었겠지.",
						"english": "Really? You heard that frantic hymn, didn't you? They believed in their faith too.",
						"japanese": "本当に？あの狂気に満ちた賛歌を聞いたのか？彼らも彼らの信念を信じていたはずだ。",
						"chinese": "真的吗？你听到那疯狂的赞歌了吗？他们也一定相信自己的信仰。",
						"french": "Vraiment ? Tu as entendu cet hymne fou ? Eux aussi croyaient en leurs convictions.",
						"spanish": "¿De verdad? ¿Escuchaste ese cántico de locura? Ellos también debieron creer en sus convicciones.",
						"vietnamese": "Thật sao? Cậu đã nghe bài thánh ca điên cuồng đó chưa? Họ chắc cũng tin vào niềm tin của mình.",
						"thai": "จริงหรือ? เจ้าได้ยินเพลงสรรเสริญที่บ้าคลั่งนั่นไหม? พวกเขาก็ต้องเชื่อในความเชื่อของพวกเขาเช่นกัน",
						"hindi": "सच में? क्या तुमने वह उन्मादी भजन सुना? उन्होंने भी अपनी आस्थाओं पर विश्वास किया होगा।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "ivar",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "강함. 영광. 우리는 그걸 좇아왔어.",
						"english": "Might. Glory. That's what we chased.",
						"japanese": "強さ。栄光。我々はそれを追い求めてきた。",
						"chinese": "强大。荣耀。我们一直追逐着这些。",
						"french": "Force. Gloire. Nous avons cherché cela.",
						"spanish": "Fuerza. Gloria. Hemos perseguido eso.",
						"vietnamese": "Sức mạnh. Vinh quang. Chúng ta đã theo đuổi những điều đó.",
						"thai": "ความแข็งแกร่ง เกียรติยศ เราไล่ตามสิ่งเหล่านั้นมาตลอด",
						"hindi": "ताकत। महिमा। हम इन्हीं के पीछे भागते रहे हैं।"
					},
					"type": "speech",
					"speaker": "ivar",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "그래. 우리의 목표였지.",
						"english": "Indeed. Our ultimate goal.",
						"japanese": "ああ。それが我々の目標だった。",
						"chinese": "是的。那是我们的目标。",
						"french": "Oui. C'était notre objectif.",
						"spanish": "Sí. Ese era nuestro objetivo.",
						"vietnamese": "Phải. Đó là mục tiêu của chúng ta.",
						"thai": "ใช่ นั่นคือเป้าหมายของเรา",
						"hindi": "हाँ। वही हमारा लक्ष्य था।"
					}
				},
				{
					"content": {
						"korean": "하지만 저들은 그 '강함의 끝'에서 광기를 찾았어.",
						"english": "But they found madness at the 'peak of strength'.",
						"japanese": "しかし、彼らは「強さの極限」で狂気を見出した。",
						"chinese": "但他们却在“力量的尽头”找到了疯狂。",
						"french": "Mais ils ont trouvé la folie au « sommet de la force ».",
						"spanish": "Pero ellos encontraron la locura en el \"límite de la fuerza\".",
						"vietnamese": "Nhưng họ lại tìm thấy sự điên rồ ở \"tận cùng sức mạnh\".",
						"thai": "แต่พวกเขากลับพบความบ้าคลั่งที่ \"จุดสูงสุดของความแข็งแกร่ง\"",
						"hindi": "लेकिन उन्होंने 'शक्ति के चरम' पर पागलपन पाया।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "ivar"
				},
				{
					"type": "speech",
					"speaker": "ivar",
					"emotion": "base",
					"content": {
						"korean": "그 경계는 어디에 있는 거지?",
						"english": "Where is that boundary?",
						"japanese": "その境界はどこにあるんだ？",
						"chinese": "那个界限在哪里？",
						"french": "Où se trouve cette limite ?",
						"spanish": "Dóonde está ese límite?",
						"vietnamese": "Ranh giới đó nằm ở đâu?",
						"thai": "ขีดจำกัดนั้นอยู่ที่ไหนกัน?",
						"hindi": "वह सीमा कहाँ है?"
					}
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "ivar",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						2,
						3
					]
				},
				{
					"content": {
						"korean": "광기의 끝을 본다는 건… 결국 나 자신을 시험하는 일일까.",
						"english": "To see the end of madness... is that ultimately testing myself?",
						"japanese": "狂気の果てを見ることは…結局、自分自身を試すことなのだろうか。",
						"chinese": "看见疯狂的尽头…最终是在考验我自己吗？",
						"french": "Voir la fin de la folie... est-ce finalement me tester moi-même ?",
						"spanish": "Ver el fin de la locura... ¿es al final ponerme a prueba a mí mismo?",
						"vietnamese": "Nhìn thấy tận cùng của sự điên rồ… rốt cuộc là đang thử thách chính mình sao?",
						"thai": "การได้เห็นจุดจบของความบ้าคลั่ง... สุดท้ายแล้วมันคือการทดสอบตัวเองอย่างนั้นหรือ?",
						"hindi": "पागलपन का अंत देखना... क्या यह अंततः खुद को परखना है?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "ivar"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "너무 깊게 생각하는 거 아니야?",
						"english": "Aren't you overthinking it?",
						"japanese": "深く考えすぎじゃないか？",
						"chinese": "你是不是想太多了？",
						"french": "Tu ne réfléchis pas trop ?",
						"spanish": "¿No estás pensando demasiado?",
						"vietnamese": "Cậu không nghĩ là mình đang nghĩ quá sâu sao?",
						"thai": "นายคิดมากไปหรือเปล่า?",
						"hindi": "क्या तुम ज़्यादा नहीं सोच रहे हो?"
					}
				},
				{
					"content": {
						"korean": "…",
						"english": "...",
						"japanese": "…",
						"chinese": "…",
						"french": "…",
						"spanish": "…",
						"vietnamese": "…",
						"thai": "...",
						"hindi": "..."
					},
					"speaker": "ivar",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "아니. 이 질문에 답해야 해.",
						"english": "No. I must answer this question.",
						"japanese": "いや。この問いに答えなければ。",
						"chinese": "不。我必须回答这个问题。",
						"french": "Non. Je dois répondre à cette question.",
						"spanish": "No. Debo responder a esta pregunta.",
						"vietnamese": "Không. Tôi phải trả lời câu hỏi này.",
						"thai": "ไม่. ฉันต้องตอบคำถามนี้.",
						"hindi": "नहीं। मुझे इस सवाल का जवाब देना होगा।"
					},
					"emotion": "base",
					"speaker": "ivar",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						1,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "ivar",
					"action": "enter"
				},
				{
					"content": {
						"korean": "점점 더 깊은 곳. 뿔잔의 웅얼거림이 다시 강해지는 듯했다.",
						"english": "Deeper and deeper. The mumbling of the horn seemed to grow stronger again.",
						"japanese": "ますます深淵へ。角杯の呟きが再び強まるようだった。",
						"chinese": "越来越深的地方。号角的低语似乎又增强了。",
						"french": "Toujours plus profond. Le murmure de la corne semblait de nouveau s'intensifier.",
						"spanish": "Cada vez más profundo. El murmullo del cuerno parecía fortalecerse de nuevo.",
						"vietnamese": "Sâu hơn và sâu hơn nữa. Tiếng lẩm bẩm của chiếc sừng dường như mạnh hơn trở lại.",
						"thai": "ลึกเข้าไปเรื่อยๆ. เสียงพึมพำของเขาสัตว์ดูเหมือนจะดังขึ้นอีกครั้ง.",
						"hindi": "गहरा और गहरा। सींग की बड़बड़ाहट फिर से तेज़ होती दिख रही थी।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "ivar",
					"emotion": "base",
					"content": {
						"korean": "저 소리… 더는 흔들리지 않아.",
						"english": "That sound... it doesn't faze me anymore.",
						"japanese": "あの音…もう揺るがない。",
						"chinese": "那个声音…再也无法动摇我了。",
						"french": "Ce son... il ne m'ébranle plus.",
						"spanish": "Ese sonido... ya no me afecta.",
						"vietnamese": "Âm thanh đó… không còn làm tôi dao động nữa.",
						"thai": "เสียงนั่น... ไม่ทำให้ฉันหวั่นไหวอีกต่อไป.",
						"hindi": "वह आवाज़... अब मुझे विचलित नहीं करती।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "이바르?",
						"english": "Ivar?",
						"japanese": "イヴァル？",
						"chinese": "伊瓦尔？",
						"french": "Ivar ?",
						"spanish": "¿Ivar?",
						"vietnamese": "Ivar?",
						"thai": "อีวาร์?",
						"hindi": "इवार?"
					}
				},
				{
					"speaker": "ivar",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "광기가 무엇인지. 직접 보고 부숴야겠어.",
						"english": "What madness is. I must see it and break it myself.",
						"japanese": "狂気とは何なのか。この目で見て、打ち砕かなければ。",
						"chinese": "什么是疯狂。我必须亲眼看到并将其打破。",
						"french": "Ce qu'est la folie. Je dois la voir et la briser moi-même.",
						"spanish": "Qué es la locura. Debo verla y romperla yo mismo.",
						"vietnamese": "Sự điên rồ là gì. Tôi phải tự mình nhìn thấy và phá hủy nó.",
						"thai": "ความบ้าคลั่งคืออะไร. ฉันต้องเห็นมันด้วยตัวเองแล้วทำลายมันทิ้ง.",
						"hindi": "पागलपन क्या है। मुझे इसे खुद देखना और तोड़ना होगा।"
					}
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "크아아… 끝이라고 생각하나…?",
						"english": "Grraah... Do you think this is the end...?",
						"japanese": "うぐぅ… 終わりだとでも思っているのか…？",
						"chinese": "呃啊… 你以为这就结束了吗…？",
						"french": "Grrraaah... Tu crois que c'est la fin... ?",
						"spanish": "Grrraaah... ¿Crees que este es el final...?",
						"vietnamese": "Khụ khụ... Ngươi nghĩ đây là kết thúc sao...?",
						"thai": "ครื... คิดว่านี่คือจุดจบแล้วรึ...?",
						"hindi": "ग्र्र्राह... क्या तुम्हें लगता है कि यह अंत है...?"
					}
				},
				{
					"speaker": "ivar",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그래. 너 같은 광기는 영원하지 않아.",
						"english": "Yes. Madness like yours doesn't last forever.",
						"japanese": "ああ。お前のような狂気は永遠ではない。",
						"chinese": "是的。像你这样的疯狂不会永恒。",
						"french": "Oui. Une folie comme la tienne n'est pas éternelle.",
						"spanish": "Sí. Una locura como la tuya no es eterna.",
						"vietnamese": "Đúng vậy. Sự điên loạn như của ngươi không thể tồn tại mãi mãi.",
						"thai": "ใช่ ความบ้าคลั่งเช่นเจ้าไม่มีทางอยู่ยงคงกระพัน",
						"hindi": "हाँ। तुम्हारे जैसा पागलपन हमेशा नहीं रहता।"
					}
				},
				{
					"content": {
						"korean": "신념의 끝에서… 우리는 길을 찾았다.",
						"english": "At the edge of conviction... we found our way.",
						"japanese": "信念の果てで… 我々は道を見つけた。",
						"chinese": "在信念的尽头… 我们找到了道路。",
						"french": "Au bout de la conviction... nous avons trouvé notre chemin.",
						"spanish": "En el fin de la convicción... encontramos nuestro camino.",
						"vietnamese": "Ở tận cùng của niềm tin... chúng ta đã tìm thấy con đường.",
						"thai": "ณ ปลายทางแห่งศรัทธา... เราได้พบทาง",
						"hindi": "आस्था के छोर पर... हमने अपना रास्ता खोज लिया।"
					},
					"emotion": "happy",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "뿔잔의 노래가 완전히 잦아들었다. 이제 남은 건, 기록되지 않은 진실뿐이었다.",
						"english": "The song of the horn cup faded completely. All that remained now was the unrecorded truth.",
						"japanese": "角杯の歌は完全に静まった。今残されたのは、記録されていない真実だけだった。",
						"chinese": "뿔杯之歌彻底平息。现在只剩下，未被记载的真相。",
						"french": "Le chant du cor s'est complètement éteint. Il ne restait plus que la vérité non consignée.",
						"spanish": "El canto del cuerno se desvaneció por completo. Ahora solo quedaba la verdad no registrada.",
						"vietnamese": "Khúc ca của chiếc sừng đã hoàn toàn tắt lịm. Giờ đây, chỉ còn lại sự thật chưa được ghi chép.",
						"thai": "เสียงเพลงจากเขาสัตว์เงียบสนิทลงแล้ว สิ่งที่เหลืออยู่ตอนนี้คือความจริงที่ยังไม่ได้บันทึกไว้",
						"hindi": "सींग प्याले का गीत पूरी तरह से मंद पड़ गया। अब जो बचा था, वह केवल अनकहा सत्य था।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"content": {
						"korean": "정체 모를 거대한 그림자가 길을 막았다. 광기 어린 에너지가 느껴졌다.",
						"english": "A colossal, unknown shadow blocked the way. A mad energy emanated from it.",
						"japanese": "正体不明の巨大な影が道を塞いだ。狂気に満ちたエネルギーを感じる。",
						"chinese": "一个不明身份的巨大黑影挡住了去路。感受到了疯狂的能量。",
						"french": "Une ombre colossale et inconnue barrait la route. Une énergie folle s'en dégageait.",
						"spanish": "Una sombra colosal e ignota bloqueaba el camino. Se sentía una energía enloquecida.",
						"vietnamese": "Một bóng đen khổng lồ không rõ danh tính chắn lối. Một năng lượng điên cuồng được cảm nhận.",
						"thai": "เงาขนาดมหึมาที่ไม่รู้จักขวางทางอยู่ สัมผัสได้ถึงพลังงานที่บ้าคลั่ง",
						"hindi": "एक विशाल, अज्ञात छाया ने रास्ता रोक दिया। उसमें से पागलपन भरी ऊर्जा महसूस हुई।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "네놈들의 신념은… 그저 허상일 뿐!",
						"english": "Your beliefs are... nothing but illusions!",
						"japanese": "お前たちの信念は… ただの虚像に過ぎない！",
						"chinese": "你们的信念… 不过是虚幻而已！",
						"french": "Vos convictions ne sont... que des illusions !",
						"spanish": "¡Vuestras creencias no son... más que ilusiones!",
						"vietnamese": "Niềm tin của các ngươi... chỉ là ảo ảnh mà thôi!",
						"thai": "ความเชื่อของพวกแกมันก็แค่... ภาพลวงตาเท่านั้น!",
						"hindi": "तुम्हारी मान्यताएँ... सिर्फ़ एक भ्रम हैं!"
					}
				},
				{
					"content": {
						"korean": "헛소리 마라. 네가 바로 광기의 끝이구나.",
						"english": "Stop spouting nonsense. You are the very end of madness.",
						"japanese": "くだらないことを言うな。お前こそ狂気の終焉だ。",
						"chinese": "别胡说八道。你才是疯狂的尽头。",
						"french": "Cesse tes balivernes. Tu es l'incarnation même de la folie.",
						"spanish": "Deja de decir tonterías. Tú eres el culmen de la locura.",
						"vietnamese": "Đừng nói nhảm. Ngươi chính là tận cùng của sự điên loạn.",
						"thai": "อย่าพูดเหลวไหล แกนั่นแหละคือจุดจบของความบ้าคลั่ง",
						"hindi": "बकवास बंद करो। तुम ही पागलपन का अंत हो।"
					},
					"type": "speech",
					"speaker": "ivar",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "ivar",
					"emotion": "angry",
					"content": {
						"korean": "네 안에서 신념과 광기의 경계를 부숴주지.",
						"english": "I'll shatter the boundary between belief and madness within you.",
						"japanese": "お前の中で信念と狂気の境界を打ち砕いてやろう。",
						"chinese": "我会打破你内心信念与疯狂的界限。",
						"french": "Je briserai la frontière entre la foi et la folie en toi.",
						"spanish": "Romperé la frontera entre la creencia y la locura dentro de ti.",
						"vietnamese": "Ta sẽ phá vỡ ranh giới giữa niềm tin và sự điên loạn trong ngươi.",
						"thai": "ข้าจะทำลายขอบเขตระหว่างศรัทธากับความบ้าคลั่งในตัวเจ้าเอง",
						"hindi": "मैं तुम्हारे अंदर विश्वास और पागलपन की सीमा को तोड़ दूँगा।"
					}
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "하찮은 신념이군. 광기 앞에서 쓰러져라.",
						"english": "What trivial beliefs. Fall before madness.",
						"japanese": "くだらない信念だな。狂気の前で倒れろ。",
						"chinese": "卑微的信念。在疯狂面前倒下吧。",
						"french": "Quelle foi insignifiante. Succombe à la folie.",
						"spanish": "Qué creencias tan triviales. Cae ante la locura.",
						"vietnamese": "Niềm tin hèn mọn. Ngươi hãy ngã xuống trước sự điên loạn đi.",
						"thai": "ศรัทธาอันไร้ค่า จงล้มลงต่อหน้าความบ้าคลั่งซะ",
						"hindi": "कितने तुच्छ विश्वास। पागलपन के सामने गिर जाओ।"
					}
				},
				{
					"type": "speech",
					"speaker": "ivar",
					"emotion": "angry",
					"content": {
						"korean": "…아직, 끝이 아니다. 더 강해져서 돌아오겠다.",
						"english": "...It's not over yet. I'll return stronger.",
						"japanese": "…まだ、終わりではない。もっと強くなって戻ってくる。",
						"chinese": "…还没有，结束。我会变得更强再回来。",
						"french": "...Ce n'est pas encore fini. Je reviendrai plus fort.",
						"spanish": "...Todavía no es el fin. Volveré más fuerte.",
						"vietnamese": "...Vẫn chưa, kết thúc. Ta sẽ trở lại mạnh mẽ hơn.",
						"thai": "...ยังไม่จบ ข้าจะกลับมาแข็งแกร่งกว่าเดิม",
						"hindi": "...अभी अंत नहीं है। मैं और मज़बूत होकर वापस आऊँगा।"
					}
				}
			]
		}
	]
} as const;
