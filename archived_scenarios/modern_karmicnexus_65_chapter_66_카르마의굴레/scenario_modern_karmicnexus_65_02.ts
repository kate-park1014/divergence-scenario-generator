export const scenario_modern_karmicnexus_65_02 = {
	"scenario_id": "modern_karmicnexus_65_02",
	"order": 2,
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
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "도시의 뒷골목은 절망의 색으로 물들었다.",
						"english": "The city's back alleys were stained with despair.",
						"japanese": "街の裏路地は絶望の色に染まっていた。",
						"chinese": "城市的后巷染上了绝望的颜色。",
						"french": "Les ruelles de la ville étaient teintées de désespoir.",
						"spanish": "Los callejones de la ciudad estaban teñidos de desesperación.",
						"vietnamese": "Những con hẻm phía sau thành phố nhuốm màu tuyệt vọng.",
						"thai": "ตรอกซอยของเมืองเปื้อนสีแห่งความสิ้นหวัง",
						"hindi": "शहर की गलियाँ निराशा के रंग में रंगी थीं।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"action": "enter",
					"speaker": "nia",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"type": "direction"
				},
				{
					"content": {
						"korean": "…내게 남은 건, 이 싸구려 옷뿐이야.",
						"english": "...All I have left are these cheap clothes.",
						"japanese": "…私に残ったのは、この安物の服だけ。",
						"chinese": "……我只剩下这些廉价的衣服了。",
						"french": "...Tout ce qu'il me reste, ce sont ces vêtements bon marché.",
						"spanish": "...Todo lo que me queda es esta ropa barata.",
						"vietnamese": "Những gì tôi còn lại là bộ quần áo rẻ tiền này.",
						"thai": "...สิ่งที่เหลืออยู่ก็แค่เสื้อผ้าถูกๆ พวกนี้แหละ",
						"hindi": "...मेरे पास बस ये सस्ते कपड़े ही बचे हैं।"
					},
					"speaker": "nia",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…당신이 니아인가요?",
						"english": "...Are you Nia?",
						"japanese": "…あなたがニアですか？",
						"chinese": "……你是妮娅吗？",
						"french": "...Êtes-vous Nia ?",
						"spanish": "...¿Eres Nia?",
						"vietnamese": "Bạn là Nia à?",
						"thai": "...คุณคือนีอาใช่ไหม",
						"hindi": "...क्या आप निया हैं?"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "그 장부… 내 모든 것을 찢어발겼어.",
						"english": "That ledger... it tore everything I had to shreds.",
						"japanese": "あの帳簿…私の全てをズタズタにした。",
						"chinese": "那本账簿……它撕碎了我的一切。",
						"french": "Ce registre... il a déchiré tout ce que j'avais en lambeaux.",
						"spanish": "Esa contabilidad... destrozó todo lo que tenía.",
						"vietnamese": "Cuốn sổ cái đó... nó đã xé nát mọi thứ tôi có.",
						"thai": "บัญชีเล่มนั้น... มันฉีกทุกสิ่งทุกอย่างของฉันเป็นชิ้นๆ",
						"hindi": "वह खाता-बही... उसने मेरे सब कुछ के चीथड़े कर दिए।"
					},
					"speaker": "nia"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "nia",
					"action": "enter",
					"type": "direction",
					"spot": [
						2,
						3
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…한때 나도 잘나갔어. 이 거리의 빛이었지.",
						"english": "...Once, I was somebody. The light of this street.",
						"japanese": "…かつては私も成功者だった。この街の光だった。",
						"chinese": "……我曾也风光过。曾是这条街的光。",
						"french": "...Autrefois, j'étais quelqu'un. La lumière de cette rue.",
						"spanish": "...Una vez, fui alguien. La luz de esta calle.",
						"vietnamese": "Đã từng, tôi là một người nổi bật. Ánh sáng của con phố này.",
						"thai": "...ครั้งหนึ่ง ฉันก็เคยยิ่งใหญ่ เป็นแสงสว่างของถนนเส้นนี้",
						"hindi": "...एक समय, मैं भी कुछ था। इस गली की रोशनी।"
					},
					"speaker": "nia"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "대체 누가 이런 짓을…",
						"english": "Who... who did this?",
						"japanese": "一体誰がこんなことを…",
						"chinese": "到底是谁做了这种事……",
						"french": "Qui... qui a fait ça ?",
						"spanish": "¿Quién... quién hizo esto?",
						"vietnamese": "Ai... ai đã làm điều này?",
						"thai": "ใคร...ใครทำแบบนี้",
						"hindi": "आखिर यह सब किसने किया...?"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "nia",
					"content": {
						"korean": "…낡은 장부 조각에 대한 소문, 들어봤어?",
						"english": "…Heard the rumors about the old ledger fragment?",
						"japanese": "「…古い帳簿の切れ端の噂、聞いたことある？」",
						"chinese": "“……你听说了关于那本旧账本残片的传闻吗？”",
						"french": "«…Tu as entendu les rumeurs sur le fragment du vieux registre ?»",
						"spanish": "¿«…Has oído los rumores sobre el fragmento del viejo libro de contabilidad?»",
						"vietnamese": "«…Nghe tin đồn về mảnh sổ cũ chưa?»",
						"thai": "«…เคยได้ยินข่าวลือเรื่องเศษสมุดบัญชีเก่าไหม?»",
						"hindi": "«…क्या तुमने पुराने बही के टुकड़े के बारे में अफवाहें सुनी हैं?»"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "핏빛 인장이 찍혔다는… 그 장부 말이야.",
						"english": "The ledger with the blood-red seal…",
						"japanese": "「血染めの印が押された…あの帳簿のことだ。」",
						"chinese": "“就是那个盖着血红色印章的……账本。”",
						"french": "«Le registre marqué d'un sceau sanglant…»",
						"spanish": "«Ese libro… el que tiene el sello de sangre.»",
						"vietnamese": "«Cái sổ có ấn ký màu máu đó…»",
						"thai": "«สมุดบัญชีที่มีตราประทับสีเลือดนั่นแหละ.»",
						"hindi": "«वही बही… जिस पर खून का मोहर लगा है।»"
					},
					"speaker": "nia"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "nia",
					"spot": [
						3,
						3
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "nia",
					"content": {
						"korean": "모든 게 한순간에 사라졌어. 내 사업도, 가족도.",
						"english": "Everything vanished in an instant. My business, my family.",
						"japanese": "「全てが一瞬で消えた。私の事業も、家族も。」",
						"chinese": "“一切都在瞬间消失了。我的生意，我的家人。”",
						"french": "«Tout a disparu en un instant. Mon affaire, ma famille.»",
						"spanish": "«Todo desapareció en un instante. Mi negocio, mi familia.»",
						"vietnamese": "«Mọi thứ biến mất trong chớp mắt. Sự nghiệp, gia đình tôi.»",
						"thai": "«ทุกอย่างหายไปในพริบตา ทั้งธุรกิจและครอบครัวของฉัน.»",
						"hindi": "«सब कुछ पल भर में गायब हो गया। मेरा धंधा भी, मेरा परिवार भी।»"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…이 도시는 약자에게 너무 잔인해.",
						"english": "…This city is too cruel to the weak.",
						"japanese": "「…この街は弱者に残酷すぎる。」",
						"chinese": "“……这座城市对弱者太残忍了。”",
						"french": "«…Cette ville est trop cruelle envers les faibles.»",
						"spanish": "«…Esta ciudad es demasiado cruel con los débiles.»",
						"vietnamese": "«…Thành phố này quá tàn nhẫn với kẻ yếu.»",
						"thai": "«…เมืองนี้โหดร้ายเกินไปสำหรับคนอ่อนแอ.»",
						"hindi": "«…यह शहर कमज़ोरों के लिए बहुत क्रूर है।»"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "사라지는 사업들이 한둘이 아니야. 다들 그렇게 흔적 없이 사라져갔지.",
						"english": "It's not just one or two businesses disappearing. They all vanished without a trace.",
						"japanese": "「消えていく事業は一つや二つじゃない。皆、そうして跡形もなく消えていった。」",
						"chinese": "“消失的生意不止一两桩。它们都这样消失得无影无踪。”",
						"french": "«Ce ne sont pas une ou deux affaires qui disparaissent. Elles ont toutes disparu sans laisser de trace.»",
						"spanish": "«No son solo uno o dos negocios los que desaparecen. Todos se desvanecieron sin dejar rastro.»",
						"vietnamese": "«Không chỉ một hai doanh nghiệp biến mất. Tất cả đều tan biến không dấu vết.»",
						"thai": "«ไม่ใช่แค่ธุรกิจหนึ่งหรือสองธุรกิจที่หายไป ทุกคนหายไปอย่างไม่มีร่องรอย.»",
						"hindi": "«सिर्फ़ एक-दो कारोबार नहीं, जो गायब हो रहे हैं। सब ऐसे ही बिना निशान के गायब हो गए।»"
					},
					"speaker": "nia"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "나는… 멈추지 않아.",
						"english": "I… won't stop.",
						"japanese": "「私は…止まらない。」",
						"chinese": "“我……不会停下。”",
						"french": "«Moi… je ne m'arrêterai pas.»",
						"spanish": "«Yo… no me detendré.»",
						"vietnamese": "«Tôi… sẽ không dừng lại.»",
						"thai": "«ฉัน… จะไม่หยุด.»",
						"hindi": "«मैं… रुकूंगा नहीं।»"
					},
					"type": "speech",
					"emotion": "angry"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						2,
						3
					],
					"action": "enter",
					"speaker": "nia"
				},
				{
					"content": {
						"korean": "이 길을 더 가면 안 돼. 넌… 내가 아니잖아.",
						"english": "Don't go further down this path. You're… not me.",
						"japanese": "「この道をこれ以上進むな。お前は…私じゃないんだ。」",
						"chinese": "“不要再往前走了。你……不是我。”",
						"french": "«Ne va pas plus loin sur ce chemin. Tu n'es… pas moi.»",
						"spanish": "«No sigas por este camino. Tú… no eres yo.»",
						"vietnamese": "«Đừng đi xa hơn trên con đường này. Ngươi… không phải ta.»",
						"thai": "«อย่าไปไกลกว่านี้ในเส้นทางนี้ เธอ…ไม่ใช่ฉัน.»",
						"hindi": "«इस रास्ते पर और आगे मत जाओ। तुम… मैं नहीं हो।»"
					},
					"speaker": "nia",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "돌아갈 곳 없어. 나도 잃은 게 많으니까.",
						"english": "There's no turning back. I've lost a lot too.",
						"japanese": "「もう引き返せない。私も多くを失ったから。」",
						"chinese": "“没有回头路了。我也失去得很多。”",
						"french": "«Il n'y a pas de retour en arrière. J'ai aussi beaucoup perdu.»",
						"spanish": "«No hay vuelta atrás. Yo también he perdido mucho.»",
						"vietnamese": "«Không có đường quay lại. Ta cũng đã mất rất nhiều.»",
						"thai": "«ไม่มีทางกลับแล้ว ฉันก็สูญเสียไปมากเหมือนกัน.»",
						"hindi": "«वापस जाने की जगह नहीं है। मैंने भी बहुत कुछ खोया है।»"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…거리의 노인이 그러더라. 모든 빚은 반드시 돌아온다고…",
						"english": "…The old man on the street said. All debts eventually come back…",
						"japanese": "「…通りの老人が言っていた。全ての借りは必ず返ってくると…」",
						"chinese": "“……街上的老人说。所有的债，终将回来……”",
						"french": "«…Le vieil homme de la rue disait. Toutes les dettes finissent par revenir…»",
						"spanish": "«…El viejo de la calle decía. Todas las deudas tarde o temprano regresan…»",
						"vietnamese": "«…Lão già trên phố nói. Mọi khoản nợ nhất định sẽ quay lại…»",
						"thai": "«…ชายชราข้างถนนบอกว่า. หนี้ทุกอย่างจะต้องกลับมา…»",
						"hindi": "«…गली के बूढ़े ने कहा था। सभी कर्ज ज़रूर वापस आते हैं…»"
					},
					"speaker": "nia"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "nia",
					"content": {
						"korean": "그 무게가 쌓여 도시를 짓누를 거라고.",
						"english": "And their weight would pile up and crush the city.",
						"japanese": "「その重みが積み重なって、街を押しつぶすだろうと。」",
						"chinese": "“那份重担会堆积如山，最终压垮这座城市。”",
						"french": "«Et que leur poids s'accumulerait et écraserait la ville.»",
						"spanish": "«Y que su peso se acumularía y aplastaría la ciudad.»",
						"vietnamese": "«Và sức nặng đó sẽ chất chồng lên, đè bẹp thành phố.»",
						"thai": "«และน้ำหนักของมันจะสะสมและบดขยี้เมืองนี้.»",
						"hindi": "«और उनका बोझ इकट्ठा होकर शहर को कुचल देगा।»"
					}
				},
				{
					"duration_ms": 400,
					"type": "direction",
					"speaker": "nia",
					"direction": "down",
					"action": "exit"
				}
			]
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"content": {
						"korean": "크윽… 겨우 이 정도…로는…",
						"english": "Urgh... just this much... is not enough...",
						"japanese": "ぐっ…これしき…では…",
						"chinese": "咳…就这点…还不够…",
						"french": "Ugh... juste ça... ce n'est pas assez...",
						"spanish": "Ugh... solo esto... no es suficiente...",
						"vietnamese": "Ư... chỉ chừng này... thì không đủ...",
						"thai": "อึก... แค่นี้เอง... ยังไม่พอหรอก...",
						"hindi": "उफ़... बस इतना ही... काफी नहीं है..."
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "(피식 웃으며) …네가 부순 건, 아주 작은 조각일 뿐. 진정한 빚은… 아직 남아있어.",
						"english": "(Snickers) ...What you've broken is just a tiny piece. The true debt... still remains.",
						"japanese": "（鼻で笑いながら）…お前が壊したのは、ほんの小さな断片に過ぎない。真の借りは…まだ残っている。",
						"chinese": "（嗤笑）…你所摧毁的，不过是微不足道的一小块。真正的债…还在呢。",
						"french": "(Ricane) ...Ce que tu as brisé n'est qu'un tout petit fragment. La vraie dette... est encore là.",
						"spanish": "(Se ríe) ...Lo que has roto es solo un pequeño fragmento. La verdadera deuda... aún persiste.",
						"vietnamese": "(Cười khẩy) ...Những gì ngươi phá vỡ chỉ là một mảnh nhỏ thôi. Món nợ thực sự... vẫn còn đó.",
						"thai": "(หัวเราะหึๆ) ...ที่แกทำลายไปน่ะเป็นแค่ชิ้นส่วนเล็กๆ เท่านั้นเอง หนี้ที่แท้จริง... ยังคงอยู่",
						"hindi": "(हंसते हुए) ...जो तुमने तोड़ा है, वो बस एक छोटा सा टुकड़ा है। असली कर्ज... अभी बाकी है।"
					},
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "…끝난 게 아니었어.",
						"english": "...It wasn't over.",
						"japanese": "…終わってなかった。",
						"chinese": "…还没结束。",
						"french": "...Ce n'était pas fini.",
						"spanish": "...No había terminado.",
						"vietnamese": "...Nó vẫn chưa kết thúc.",
						"thai": "...ยังไม่จบสินะ",
						"hindi": "...यह खत्म नहीं हुआ था।"
					},
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "랜덤 보스는 그림자처럼 사라졌다. 하지만 도시의 어둠은 걷히지 않았다.",
						"english": "{random_boss} vanished like a shadow. But the city's darkness had not lifted.",
						"japanese": "ランダムボスは影のように消えた。だが、都市の闇は晴れなかった。",
						"chinese": "{random_boss}如影般消失了。但城市的黑暗并未散去。",
						"french": "{random_boss} disparut comme une ombre. But l'obscurité de la ville ne s'était pas levée.",
						"spanish": "{random_boss} desapareció como una sombra. Pero la oscuridad de la ciudad no se disipó.",
						"vietnamese": "{random_boss} biến mất như một bóng ma. Nhưng bóng tối của thành phố vẫn chưa tan.",
						"thai": "{random_boss} หายตัวไปเหมือนเงา แต่ความมืดมิดของเมืองก็ยังไม่จางหายไป",
						"hindi": "{random_boss} एक परछाई की तरह गायब हो गया। लेकिन शहर का अंधेरा छंटा नहीं।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "거대한 장부의 페이지가, 서서히 넘어가기 시작했다.",
						"english": "The pages of the colossal ledger slowly began to turn.",
						"japanese": "巨大な帳簿のページが、ゆっくりと捲られ始めた。",
						"chinese": "巨型账本的页面，开始缓缓翻动。",
						"french": "Les pages du grand registre ont commencé à se tourner lentement.",
						"spanish": "Las páginas del inmenso libro de contabilidad comenzaron a pasar lentamente.",
						"vietnamese": "Các trang sổ cái khổng lồ bắt đầu từ từ lật giở.",
						"thai": "หน้ากระดาษของบัญชีขนาดมหึมาเริ่มพลิกไปอย่างช้าๆ",
						"hindi": "विशाल बहीखाते के पन्ने धीरे-धीरे पलटने लगे।"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "시스템의 심장부, 어둠이 춤추는 곳.",
						"english": "The heart of the system, where darkness dances.",
						"japanese": "システムの心臓部、闇が踊る場所。",
						"chinese": "系统核心，黑暗之舞。",
						"french": "Le cœur du système, où la danse des ténèbres.",
						"spanish": "El corazón del sistema, donde la oscuridad baila.",
						"vietnamese": "Trái tim của hệ thống, nơi bóng tối khiêu vũ.",
						"thai": "ใจกลางของระบบ ที่ซึ่งความมืดมิดเต้นรำ",
						"hindi": "सिस्टम का दिल, जहां अंधेरा नाचता है।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"action": "enter",
					"speaker": "nia",
					"type": "direction",
					"spot": [
						3,
						3
					],
					"duration_ms": 500
				},
				{
					"speaker": "nia",
					"content": {
						"korean": "여…여기까지 오다니… 제발 멈춰…",
						"english": "Y-you've come this far... Please stop...",
						"japanese": "こ…ここまで来るとは… お願い、止まって…",
						"chinese": "你…你竟然走到这… 求求你…停下…",
						"french": "V-vous êtes venu jusqu'ici... S'il vous plaît, arrêtez...",
						"spanish": "H-has llegado tan lejos... Por favor, detente...",
						"vietnamese": "Ng-ngươi đã đến tận đây... Làm ơn, dừng lại...",
						"thai": "น-นายมาถึงที่นี่แล้ว... ได้โปรด หยุดเถอะ...",
						"hindi": "त-तुम इतनी दूर आ गए... कृपया रुक जाओ..."
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "direction",
					"duration_ms": 400,
					"action": "exit",
					"direction": "down",
					"speaker": "nia"
				},
				{
					"content": {
						"korean": "(비웃듯) 또 한 명의 어리석은 자가 여기까지 기어왔군.",
						"english": "(Scoffs) Another fool has crawled his way here.",
						"japanese": "（嘲笑うように）また一人、愚かな者がここまで這い上がってきたか。",
						"chinese": "（嗤笑）又一个蠢货爬到这来了。",
						"french": "(Ricane) Encore un imbécile qui a rampé jusqu'ici.",
						"spanish": "(Se burla) Otro tonto ha logrado arrastrarse hasta aquí.",
						"vietnamese": "(Cười khẩy) Lại một kẻ ngốc nữa bò được đến đây rồi.",
						"thai": "(เยาะเย้ย) เจ้าโง่อีกคนคลานมาถึงที่นี่แล้วสินะ",
						"hindi": "(हंसते हुए) एक और मूर्ख यहां तक रेंग कर आ गया।"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "{random_boss}의 시스템은 완벽해. 이 도시의 질서이자 정의.",
						"english": "{random_boss}'s system is perfect. It is the order and justice of this city.",
						"japanese": "{random_boss}のシステムは完璧だ。この都市の秩序であり、正義なのだ。",
						"chinese": "{random_boss}的系统是完美的。它是这座城市的秩序与正义。",
						"french": "Le système de {random_boss} est parfait. C'est l'ordre et la justice de cette ville.",
						"spanish": "El sistema de {random_boss} es perfecto. Es el orden y la justicia de esta ciudad.",
						"vietnamese": "Hệ thống của {random_boss} là hoàn hảo. Nó là trật tự và công lý của thành phố này.",
						"thai": "ระบบของ {random_boss} นั้นสมบูรณ์แบบ มันคือระเบียบและความยุติธรรมของเมืองนี้",
						"hindi": "{random_boss} का सिस्टम एकदम सही है। यह इस शहर की व्यवस्था और न्याय है।"
					},
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "정의? 네가 빼앗은 모든 것들이 정의라고?",
						"english": "Justice? You call everything you've taken 'justice'?",
						"japanese": "正義？お前が奪ったもの全てが正義だと？",
						"chinese": "正义？你所剥夺的一切都是正义？",
						"french": "La justice ? Tu appelles tout ce que tu as pris 'justice' ?",
						"spanish": "¿Justicia? ¿Llamas 'justicia' a todo lo que has arrebatado?",
						"vietnamese": "Công lý? Ngươi gọi tất cả những gì ngươi đã cướp đoạt là 'công lý' ư?",
						"thai": "ความยุติธรรม? แกเรียกทุกสิ่งที่แกพรากไปว่า 'ความยุติธรรม' งั้นเหรอ?",
						"hindi": "न्याय? जो कुछ भी तुमने छीना है, उसे तुम न्याय कहते हो?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "그들은 약했을 뿐. 빚은 갚아야 하는 법. 그게 세상의 이치.",
						"english": "They were merely weak. Debts must be paid. That's the way of the world.",
						"japanese": "彼らはただ弱かっただけ。借りは返さねばならぬ。それが世の理だ。",
						"chinese": "他们只是弱小罢了。债是要还的。这就是世间的道理。",
						"french": "Ils étaient simplement faibles. Les dettes doivent être payées. C'est la loi du monde.",
						"spanish": "Simplemente eran débiles. Las deudas deben pagarse. Así es el mundo.",
						"vietnamese": "Chúng chỉ yếu ớt mà thôi. Nợ phải trả. Đó là lẽ thường của thế gian.",
						"thai": "พวกมันแค่่่อ่อนแอเท่านั้นเอง หนี้ต้องชดใช้ นั่นแหละคือกฎของโลก",
						"hindi": "वे बस कमज़ोर थे। कर्ज चुकाना ही पड़ता है। यही दुनिया का नियम है।"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "시스템의 냉혹한 손아귀가 모든 것을 집어삼켰다.",
						"english": "The system's ruthless grip devoured all.",
						"japanese": "システムの冷酷な手がすべてを飲み込んだ。",
						"chinese": "系统的冷酷之手，吞噬了一切。",
						"french": "La main impitoyable du système a tout englouti.",
						"spanish": "La implacable garra del sistema lo devoró todo.",
						"vietnamese": "Nắm tay lạnh lùng của hệ thống đã nuốt chửng mọi thứ.",
						"thai": "กำมืออันไร้ความปรานีของระบบได้กลืนกินทุกสิ่งแล้ว",
						"hindi": "सिस्टम की निर्मम पकड़ ने सब कुछ निगल लिया।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "빚을 갚지 못한 자에게, 자비란 없다.",
						"english": "For those who cannot repay their debt, there is no mercy.",
						"japanese": "借りを返せぬ者に、慈悲はない。",
						"chinese": "欠债不还者，无慈悲可言。",
						"french": "Pour ceux qui ne peuvent pas rembourser leur dette, il n'y a pas de pitié.",
						"spanish": "Para quienes no pueden saldar su deuda, no hay piedad.",
						"vietnamese": "Kẻ không trả được nợ, không có lòng khoan dung.",
						"thai": "ไม่มีเมตตาสำหรับผู้ที่ชำระหนี้ไม่ได้",
						"hindi": "जो अपना क़र्ज़ नहीं चुका सकते, उनके लिए कोई दया नहीं।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…아직… 끝나지 않았어. 반드시.",
						"english": "...It's not... over yet. I swear it.",
						"japanese": "…まだ…終わっていない。必ず。",
						"chinese": "…还没…结束。一定要。",
						"french": "...Ce n'est pas encore... fini. Je le jure.",
						"spanish": "...Aún... no ha terminado. Lo juro.",
						"vietnamese": "...Vẫn chưa... kết thúc. Nhất định.",
						"thai": "...ยัง...ไม่จบ แค่นี้หรอกนะ ฉันสาบาน",
						"hindi": "...अभी... ख़त्म नहीं हुआ। ज़रूर।"
					},
					"type": "speech",
					"emotion": "angry"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"도시의 그림자 아래, 빚은 영혼을 갉아먹었다.",
			"시스템은 공정하다 속삭였지만, 그건 거짓말이었다.",
			"니아는 울었다. 가진 모든 것을 빼앗긴 채.",
			"그리고 주인공은, 그 슬픔 속으로 걸어 들어갔다."
		],
		"english": [
			"Under the city's shadow, debt gnawed at souls.",
			"The system whispered \"fair,\" but it was a lie.",
			"Nia wept, stripped of everything.",
			"And the protagonist walked into that sorrow."
		],
		"japanese": [
			"街の影の下、借金は魂を蝕んだ。",
			"システムは公平だと囁いたが、それは嘘だった。",
			"ニアは泣いた。全てを奪われたまま。",
			"そして主人公は、その悲しみの中へ足を踏み入れた。"
		],
		"chinese": [
			"在城市的阴影下，债务侵蚀着灵魂。",
			"系统低语着“公平”，但那是个谎言。",
			"妮娅哭了，被剥夺了一切。",
			"而主角，走进了那份悲伤。"
		],
		"french": [
			"Sous l'ombre de la ville, la dette rongeait les âmes.",
			"Le système murmurait « juste », mais c'était un mensonge.",
			"Nia pleurait, dépouillée de tout.",
			"Et le protagoniste entra dans cette tristesse."
		],
		"spanish": [
			"Bajo la sombra de la ciudad, la deuda carcomía las almas.",
			"El sistema susurraba \"justo\", pero era una mentira.",
			"Nia lloró, despojada de todo.",
			"Y el protagonista entró en esa tristeza."
		],
		"vietnamese": [
			"Dưới bóng thành phố, nợ nần gặm nhấm linh hồn.",
			"Hệ thống thì thầm \"công bằng\", nhưng đó là một lời dối trá.",
			"Nia đã khóc, bị tước đoạt mọi thứ.",
			"Và nhân vật chính bước vào nỗi buồn đó."
		],
		"thai": [
			"ภายใต้เงาเมือง หนี้สินกัดกินจิตวิญญาณ",
			"ระบบกระซิบว่า \"ยุติธรรม\" แต่มันคือคำโกหก",
			"เนียร้องไห้ ถูกปล้นไปทุกสิ่ง",
			"และตัวเอกก็ก้าวเข้าไปในความโศกเศร้า"
		],
		"hindi": [
			"शहर की छाया में, कर्ज ने आत्माओं को कुतर दिया।",
			"सिस्टम फुसफुसाता था \"निष्पक्ष\", पर वह झूठ था।",
			"निया रोई, सब कुछ छिन जाने पर।",
			"और नायक उस दुख में चला गया।"
		]
	}
} as const;
