export const scenario_desert_qadir_legacy_02 = {
	"scenario_id": "desert_qadir_legacy_02",
	"order": 2,
	"act": "rising",
	"theme": "desert",
	"actors": {
		"ashur": {
			"id": "mon_a07b6a77-ad2e-4adb-b4ed-56e7e10cd5c7",
			"name": {
				"korean": "아슈르",
				"english": "Ashur",
				"japanese": "アシュール",
				"chinese": "阿舒尔",
				"french": "Ashur",
				"spanish": "Ashur",
				"vietnamese": "Ashur",
				"thai": "อาชูร์",
				"hindi": "अशूर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/eb36f4ec-7b0f-47d0-7073-647e4b01e700/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/e0b84a6e-36fc-4ba2-5c1d-54fbb18adb00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"사막은 모든 것을 집어삼켰다.",
			"신뢰는 조각나고, 동료는 적이 되었다.",
			"아슈르. 한때 같은 길을 걸었던 자.",
			"이제 그의 눈엔 오직 회의만이 가득하다.",
			"이 혼돈 속에서, 우리는 무엇을 지켜낼 수 있을까."
		],
		"english": [
			"The desert swallowed everything.",
			"Trust shattered, allies became foes.",
			"Ashur. Once, one who walked the same path.",
			"Now, only doubt fills his eyes.",
			"In this chaos, what can we protect?"
		],
		"japanese": [
			"砂漠はすべてを飲み込んだ。",
			"信頼は砕け散り、仲間は敵となった。",
			"アシュール。かつて同じ道を歩んだ者。",
			"今、彼の瞳には懐疑だけが満ちている。",
			"この混沌の中で、我々は何を守り抜けるのか。"
		],
		"chinese": [
			"沙漠吞噬了一切。",
			"信任崩塌，盟友反目成仇。",
			"阿舒尔。曾与我同行之人。",
			"如今，他的眼中只剩下怀疑。",
			"在这混乱之中，我们能守护住什么？"
		],
		"french": [
			"Le désert a tout englouti.",
			"La confiance s'est brisée, les alliés sont devenus des ennemis.",
			"Ashur. Celui qui a jadis marché sur le même chemin.",
			"Maintenant, seul le doute emplit ses yeux.",
			"Dans ce chaos, que pouvons-nous protéger ?"
		],
		"spanish": [
			"El desierto lo engulló todo.",
			"La confianza se hizo añicos, los aliados se convirtieron en enemigos.",
			"Ashur. Aquel que una vez anduvo el mismo camino.",
			"Ahora, solo la duda llena sus ojos.",
			"¿En este caos, qué podremos proteger?"
		],
		"vietnamese": [
			"Sa mạc đã nuốt chửng mọi thứ.",
			"Niềm tin tan vỡ, đồng đội thành kẻ thù.",
			"Ashur. Kẻ từng chung đường.",
			"Giờ đây, trong mắt hắn chỉ còn sự hoài nghi.",
			"Trong hỗn loạn này, ta có thể bảo vệ được điều gì?"
		],
		"thai": [
			"ทะเลทรายกลืนกินทุกสิ่ง",
			"ความไว้วางใจแตกสลาย พันธมิตรกลายเป็นศัตรู",
			"อะชูร์ ผู้ที่ครั้งหนึ่งเคยเดินบนเส้นทางเดียวกัน",
			"บัดนี้ มีเพียงความสงสัยที่เติมเต็มดวงตาของเขา",
			"ในความสับสนวุ่นวายนี้ เราจะปกป้องอะไรได้บ้าง"
		],
		"hindi": [
			"रेगिस्तान ने सब कुछ निगल लिया।",
			"विश्वास टूट गया, साथी दुश्मन बन गए।",
			"अशूर। कभी एक ही राह पर चलने वाला।",
			"अब उसकी आँखों में केवल संदेह है।",
			"इस अराजकता में, हम क्या बचा सकते हैं?"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "사막은 피와 모래로 뒤섞인 아비규환의 땅이 되었다.",
						"english": "The desert has become a land of pandemonium, mixed with blood and sand.",
						"japanese": "砂漠は血と砂が入り混じる阿鼻叫喚の地と化した。",
						"chinese": "沙漠已成为一片血与沙交织的炼狱。",
						"french": "Le désert est devenu une terre de pandémonium, mêlée de sang et de sable.",
						"spanish": "El desierto se ha convertido en una tierra de pandemonio, mezclada con sangre y arena.",
						"vietnamese": "Sa mạc đã trở thành một vùng đất hỗn loạn, ngập trong máu và cát.",
						"thai": "ทะเลทรายได้กลายเป็นดินแดนแห่งความโกลาหลที่ปะปนไปด้วยเลือดและทราย",
						"hindi": "रेगिस्तान खून और रेत से सना हुआ एक नरक बन गया है।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이게… 카디르가 사라진 대가인가?",
						"english": "Is this... the price for Kadir's disappearance?",
						"japanese": "これが…カディルが消えた代償なのか？",
						"chinese": "这就是…卡迪尔消失的代价吗？",
						"french": "Est-ce... le prix de la disparition de Kadir ?",
						"spanish": "¿Es este... el precio por la desaparición de Kadir?",
						"vietnamese": "Đây có phải... là cái giá cho sự biến mất của Kadir?",
						"thai": "นี่คือ... ราคาสำหรับการหายตัวไปของคาดีร์งั้นหรือ?",
						"hindi": "क्या यह... कादिर के गायब होने का मोल है?"
					},
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "ashur",
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						5,
						2
					]
				},
				{
					"content": {
						"korean": "…왔군. 네놈 때문에 모든 것이 부서졌는데.",
						"english": "...You've come. Everything shattered because of you.",
						"japanese": "…来たな。貴様のせいで全てが壊れたのに。",
						"chinese": "……你来了。一切都因你而毁。",
						"french": "...Tu es venu. Tout s'est brisé à cause de toi.",
						"spanish": "...Has venido. Todo se hizo pedazos por tu culpa.",
						"vietnamese": "...Ngươi đã đến. Tất cả tan vỡ vì ngươi.",
						"thai": "...มาแล้วสินะ ทุกสิ่งพังทลายเพราะแก",
						"hindi": "…तुम आ गए। तुम्हारी वजह से सब कुछ टूट गया।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "ashur"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "아슈르… 날 믿지 못하는 건가?",
						"english": "Ashur... You don't trust me?",
						"japanese": "アシュール…俺を信じられないのか？",
						"chinese": "阿舒尔……你不相信我吗？",
						"french": "Ashur... Tu ne me fais pas confiance ?",
						"spanish": "Ashur... ¿No confías en mí?",
						"vietnamese": "Ashur... Ngươi không tin ta sao?",
						"thai": "อะชูร์... ไม่เชื่อใจข้าหรือ?",
						"hindi": "अशूर... क्या तुम मुझ पर भरोसा नहीं करते?"
					},
					"emotion": "sad"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "신뢰? 그딴 건 모래바람에 날아간 지 오래다.",
						"english": "Trust? That kind of thing blew away in the sandstorm long ago.",
						"japanese": "信頼？そんなものは砂嵐に吹き飛ばされて久しい。",
						"chinese": "信任？那种东西早就被沙尘暴吹散了。",
						"french": "La confiance ? Ce genre de chose s'est envolé dans la tempête de sable il y a longtemps.",
						"spanish": "¿Confianza? Eso se lo llevó la tormenta de arena hace mucho.",
						"vietnamese": "Tin tưởng? Thứ đó đã bay theo bão cát từ lâu rồi.",
						"thai": "ความไว้วางใจ? สิ่งเหล่านั้นปลิวหายไปกับพายุทรายนานแล้ว",
						"hindi": "विश्वास? वह तो बहुत पहले ही रेत के तूफान में उड़ गया।"
					},
					"type": "speech",
					"speaker": "ashur"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"speaker": "ashur",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						4,
						2
					]
				},
				{
					"speaker": "ashur",
					"type": "speech",
					"content": {
						"korean": "넌 평화를 외치며 질서를 파괴했지. 내 부족처럼.",
						"english": "You cried for peace, yet destroyed order. Like my tribe.",
						"japanese": "お前は平和を叫びながら秩序を破壊した。私の部族のように。",
						"chinese": "你高喊和平，却破坏了秩序。就像我的部落一样。",
						"french": "Tu as crié à la paix, mais tu as détruit l'ordre. Comme ma tribu.",
						"spanish": "Gritaste por la paz, pero destruiste el orden. Como mi tribu.",
						"vietnamese": "Ngươi kêu gào hòa bình, nhưng lại phá hủy trật tự. Giống như bộ tộc của ta.",
						"thai": "เจ้าเรียกร้องสันติภาพ แต่กลับทำลายระเบียบ เช่นเดียวกับเผ่าของข้า",
						"hindi": "तुमने शांति के लिए पुकारा, फिर भी व्यवस्था को नष्ट कर दिया। मेरे कबीले की तरह।"
					},
					"emotion": "angry"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "선인장 부족은… 네 잘못이 아니었어.",
						"english": "The Cactus Tribe... it wasn't your fault.",
						"japanese": "サボテン族は… お前のせいじゃなかった。",
						"chinese": "仙人掌部落……那不是你的错。",
						"french": "La tribu des Cactus... ce n'était pas ta faute.",
						"spanish": "La Tribu Cactus... no fue tu culpa.",
						"vietnamese": "Bộ tộc Xương Rồng... đó không phải lỗi của ngươi.",
						"thai": "เผ่ากระบองเพชร... ไม่ใช่ความผิดของเจ้า",
						"hindi": "कैक्टस जनजाति... यह तुम्हारी गलती नहीं थी।"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "아니, 결국 아무도 지키지 못했지. 나 스스로 해야 했어.",
						"english": "No, in the end, I couldn't protect anyone. I had to do it myself.",
						"japanese": "いや、結局誰も守れなかった。自分でやるしかなかったんだ。",
						"chinese": "不，最终我谁都没能守护。我必须自己动手。",
						"french": "Non, au final, je n'ai pu protéger personne. J'ai dû le faire moi-même.",
						"spanish": "No, al final, no pude proteger a nadie. Tuve que hacerlo yo mismo.",
						"vietnamese": "Không, cuối cùng ta không bảo vệ được ai cả. Ta phải tự mình làm.",
						"thai": "ไม่สิ ท้ายที่สุด ข้าก็ปกป้องใครไม่ได้เลย ข้าต้องทำเอง",
						"hindi": "नहीं, अंत में, मैं किसी को नहीं बचा पाया। मुझे खुद ही करना पड़ा।"
					},
					"type": "speech",
					"speaker": "ashur"
				},
				{
					"content": {
						"korean": "혼자서는 안 돼. 우린 다시 손을 잡아야 해.",
						"english": "You can't do it alone. We must join hands again.",
						"japanese": "一人では無理だ。我々は再び手を取り合うべきだ。",
						"chinese": "一个人不行。我们必须再次携手。",
						"french": "Tu ne peux pas le faire seul. Nous devons nous unir à nouveau.",
						"spanish": "No puedes hacerlo solo. Debemos unir fuerzas de nuevo.",
						"vietnamese": "Ngươi không thể một mình được. Chúng ta phải bắt tay lại.",
						"thai": "เจ้าทำคนเดียวไม่ได้หรอก เราต้องร่วมมือกันอีกครั้ง",
						"hindi": "तुम अकेले नहीं कर सकते। हमें फिर से हाथ मिलाना होगा।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "이제 그놈의 평화 타령은 지겹다. 이 혼돈 속에서 난 내 정의를 찾을 거야.",
						"english": "I'm sick of this talk of peace. In this chaos, I'll find my justice.",
						"japanese": "もうその平和の話はうんざりだ。この混沌の中で、私は私の正義を見つける。",
						"chinese": "我厌倦了那些和平的言论。在这混乱之中，我将找到我的正义。",
						"french": "J'en ai assez de ces discours de paix. Dans ce chaos, je trouverai ma justice.",
						"spanish": "Estoy harto de esta charla de paz. En este caos, encontraré mi justicia.",
						"vietnamese": "Ta đã chán ngấy những lời rao giảng hòa bình. Trong mớ hỗn độn này, ta sẽ tìm thấy công lý của mình.",
						"thai": "ข้าเบื่อหน่ายเรื่องสันติภาพนี่เต็มทีแล้ว ในความโกลาหลนี้ ข้าจะค้นหาความยุติธรรมของข้า",
						"hindi": "मुझे इस शांति की बातें सुनकर नफरत हो गई है। इस अराजकता में, मैं अपना न्याय ढूंढूंगा।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "ashur"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"speaker": "ashur",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"speaker": "ashur",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "네놈의 이상은 이 사막에선 독이다. 길을 막겠어.",
						"english": "Your ideals are poison in this desert. I'll block your path.",
						"japanese": "お前の理想は、この砂漠では毒だ。道は塞がせてもらう。",
						"chinese": "你的理想在这片沙漠中是毒药。我会挡住你的去路。",
						"french": "Tes idéaux sont un poison dans ce désert. Je te barrerai la route.",
						"spanish": "Tus ideales son veneno en este desierto. Bloquearé tu camino.",
						"vietnamese": "Lý tưởng của ngươi là thuốc độc ở sa mạc này. Ta sẽ chặn đường ngươi.",
						"thai": "อุดมคติของเจ้าเป็นยาพิษในทะเลทรายแห่งนี้ ข้าจะขวางทางเจ้า",
						"hindi": "तुम्हारे आदर्श इस रेगिस्तान में ज़हर हैं। मैं तुम्हारा रास्ता रोकूंगा।"
					}
				},
				{
					"content": {
						"korean": "막으려는 거야? 왜?",
						"english": "You're trying to stop me? Why?",
						"japanese": "止めようとするのか？なぜだ？",
						"chinese": "你想阻止我？为什么？",
						"french": "Tu essaies de m'arrêter ? Pourquoi ?",
						"spanish": "¿Intentas detenerme? ¿Por qué?",
						"vietnamese": "Ngươi muốn ngăn ta sao? Tại sao?",
						"thai": "เจ้าจะหยุดข้าหรือ? ทำไม?",
						"hindi": "तुम मुझे रोकने की कोशिश कर रहे हो? क्यों?"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "ashur",
					"emotion": "base",
					"content": {
						"korean": "모든 것을 잃어봐야 알겠지. 진정한 힘이 무엇인지.",
						"english": "You'll only understand what true power is once you've lost everything.",
						"japanese": "全てを失って初めてわかるだろう。真の力が何なのかを。",
						"chinese": "你只有失去一切才能明白。真正的力量是什么。",
						"french": "Tu ne comprendras la véritable puissance qu'une fois que tu auras tout perdu.",
						"spanish": "Solo entenderás lo que es el verdadero poder una vez que lo hayas perdido todo.",
						"vietnamese": "Ngươi sẽ chỉ hiểu sức mạnh thực sự là gì khi ngươi đã mất đi tất cả.",
						"thai": "เจ้าจะเข้าใจพลังที่แท้จริงก็ต่อเมื่อเจ้าสูญเสียทุกสิ่งไปแล้วเท่านั้น",
						"hindi": "तुम तभी समझोगे कि सच्ची शक्ति क्या है, जब तुम सब कुछ खो दोगे।"
					}
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "설마… 우리를 배신하겠다는 건가?",
						"english": "Surely... you're not going to betray us?",
						"japanese": "まさか… 我々を裏切るつもりか？",
						"chinese": "难道……你要背叛我们？",
						"french": "Sûrement... tu ne vas pas nous trahir ?",
						"spanish": "¿Seguro... que no nos vas a traicionar?",
						"vietnamese": "Chẳng lẽ... ngươi định phản bội chúng ta?",
						"thai": "ไม่จริงน่า... เจ้าจะทรยศพวกเราหรือ?",
						"hindi": "कहीं... तुम हमें धोखा तो नहीं दोगे?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "ashur",
					"content": {
						"korean": "난 단지 내 길을 갈 뿐. 방해한다면… 쓰러뜨릴 뿐이다.",
						"english": "I'm merely walking my own path. If you interfere... I'll simply strike you down.",
						"japanese": "私はただ自分の道を行くだけだ。邪魔をするなら… 打ち倒すのみ。",
						"chinese": "我只是走自己的路。如果阻碍……我只会将你击倒。",
						"french": "Je ne fais que suivre mon propre chemin. Si tu interfères... je te terrasserai.",
						"spanish": "Simplemente sigo mi propio camino. Si interfieres... simplemente te derribaré.",
						"vietnamese": "Ta chỉ đơn thuần là đi con đường của mình. Nếu ngươi cản trở... ta sẽ chỉ đánh gục ngươi.",
						"thai": "ข้าเพียงแค่เดินตามทางของข้า หากเจ้าขัดขวาง... ข้าก็จะโค่นเจ้าลงเท่านั้น",
						"hindi": "मैं बस अपने रास्ते पर चल रहा हूं। अगर तुम दखल देते हो... तो मैं तुम्हें मार गिराऊंगा।"
					},
					"emotion": "angry"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						2,
						2
					],
					"type": "direction",
					"speaker": "ashur",
					"action": "enter"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "이 길은 네놈의 것이 아니다. 여기서 멈춰라.",
						"english": "This path is not yours. Stop here.",
						"japanese": "この道はお前のものじゃない。ここで止まれ。",
						"chinese": "这条路不属于你。到此为止。",
						"french": "Ce chemin n'est pas le tien. Arrête-toi ici.",
						"spanish": "Este camino no es tuyo. Detente aquí.",
						"vietnamese": "Con đường này không phải của ngươi. Dừng lại đây.",
						"thai": "เส้นทางนี้ไม่ใช่ของเจ้า หยุดอยู่แค่นี้",
						"hindi": "यह रास्ता तुम्हारा नहीं है। यहीं रुक जाओ।"
					},
					"speaker": "ashur",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "아슈르! 결국 여기까지 온 거야?",
						"english": "Ashur! You actually made it this far?",
						"japanese": "アシュール！まさかここまで来たのか？",
						"chinese": "阿什尔！你竟然走到这里了？",
						"french": "Ashur ! Tu es vraiment venu jusqu'ici ?",
						"spanish": "¡Ashur! ¿En serio llegaste tan lejos?",
						"vietnamese": "Ashur! Cuối cùng ngươi cũng đến được đây sao?",
						"thai": "อาชูร์! เจ้ามาถึงที่นี่จริงๆ รึ?",
						"hindi": "अशूर! तुम सच में इतनी दूर आ गए?"
					},
					"emotion": "angry"
				},
				{
					"duration_ms": 300,
					"action": "shake",
					"speaker": "narrator",
					"type": "direction"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "모래바람이 거세졌다. 아슈르가 결단을 내렸다.",
						"english": "The sandstorm intensified. Ashur made a decision.",
						"japanese": "砂嵐が激しくなった。アシュールは決断を下した。",
						"chinese": "沙尘暴愈演愈烈。阿什尔做出了决断。",
						"french": "La tempête de sable s'intensifia. Ashur prit une décision.",
						"spanish": "La tormenta de arena se intensificó. Ashur tomó una decisión.",
						"vietnamese": "Bão cát dữ dội hơn. Ashur đã đưa ra quyết định.",
						"thai": "พายุทรายรุนแรงขึ้น อาชูร์ตัดสินใจแล้ว",
						"hindi": "रेत का तूफान तेज हो गया। अशूर ने फैसला कर लिया।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "미안하지만, 내 방식대로 해야겠어. 넌 방해가 될 뿐이다.",
						"english": "Sorry, but I have to do it my way. You're just in the way.",
						"japanese": "悪いが、俺のやり方でやらせてもらう。お前は邪魔なだけだ。",
						"chinese": "抱歉，我必须按我的方式来。你只会碍事。",
						"french": "Désolé, mais je dois faire à ma manière. Tu n'es qu'un obstacle.",
						"spanish": "Lo siento, pero tengo que hacerlo a mi manera. Solo estorbas.",
						"vietnamese": "Xin lỗi, nhưng ta phải làm theo cách của mình. Ngươi chỉ là vật cản thôi.",
						"thai": "ขอโทษนะ แต่ฉันต้องทำตามวิธีของฉัน นายเป็นแค่ตัวเกะกะ",
						"hindi": "माफ़ करना, पर मुझे अपने तरीके से करना होगा। तुम बस रास्ते में हो।"
					},
					"speaker": "ashur",
					"type": "speech"
				},
				{
					"duration_ms": 400,
					"type": "direction",
					"speaker": "ashur",
					"action": "exit",
					"direction": "down"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "배신당했어… 이렇게 될 줄은 몰랐는데.",
						"english": "Betrayed... I never thought it would come to this.",
						"japanese": "裏切られた…こうなるとは思わなかった。",
						"chinese": "被背叛了……没想到会变成这样。",
						"french": "Trahi... Je n'aurais jamais pensé que ça finirait ainsi.",
						"spanish": "Traicionado... Nunca pensé que llegaría a esto.",
						"vietnamese": "Bị phản bội... Không ngờ mọi chuyện lại thành ra thế này.",
						"thai": "ถูกทรยศ... ไม่คิดเลยว่าจะจบลงแบบนี้",
						"hindi": "धोखा दिया गया... मुझे नहीं पता था कि ऐसा होगा।"
					}
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"content": {
						"korean": "모래 폭풍이 모든 것을 집어삼켰다. 다시 일어서야 한다.",
						"english": "The sandstorm devoured everything. I must rise again.",
						"japanese": "砂嵐がすべてを飲み込んだ。再び立ち上がらねばならない。",
						"chinese": "沙尘暴吞噬了一切。我必须再次崛起。",
						"french": "La tempête de sable a tout dévoré. Je dois me relever.",
						"spanish": "La tormenta de arena lo devoró todo. Debo levantarme de nuevo.",
						"vietnamese": "Bão cát nuốt chửng mọi thứ. Tôi phải đứng dậy một lần nữa.",
						"thai": "พายุทรายกลืนกินทุกสิ่ง ฉันต้องลุกขึ้นอีกครั้ง",
						"hindi": "रेगिस्तानी तूफान ने सब कुछ निगल लिया। मुझे फिर से उठना होगा।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "하찮은 저항이군. 이 사막은 파멸을 원한다.",
						"english": "A trivial resistance. This desert craves destruction.",
						"japanese": "取るに足らない抵抗だな。この砂漠は破滅を望んでいる。",
						"chinese": "微不足道的抵抗。这片沙漠渴望毁灭。",
						"french": "Une résistance insignifiante. Ce désert aspire à la destruction.",
						"spanish": "Una resistencia trivial. Este desierto anhela la destrucción.",
						"vietnamese": "Sức kháng cự tầm thường. Sa mạc này khao khát sự hủy diệt.",
						"thai": "การต่อต้านเล็กน้อย ทะเลทรายแห่งนี้โหยหาการทำลายล้าง",
						"hindi": "एक मामूली प्रतिरोध। यह रेगिस्तान विनाश चाहता है।"
					},
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "아직 끝나지 않았어. 아슈르… 널 막을 거야.",
						"english": "It's not over yet. Ashur... I will stop you.",
						"japanese": "まだ終わってない。アシュル...お前を止める。",
						"chinese": "还没结束。阿舒尔...我会阻止你。",
						"french": "Ce n'est pas encore fini. Ashur... Je t'arrêterai.",
						"spanish": "Aún no ha terminado. Ashur... Te detendré.",
						"vietnamese": "Chưa kết thúc đâu. Ashur... Tôi sẽ ngăn cản anh.",
						"thai": "ยังไม่จบ อาชูร์... ฉันจะหยุดนายเอง",
						"hindi": "अभी खत्म नहीं हुआ है। अशूर... मैं तुम्हें रोकूंगा।"
					}
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "고대 유적 깊은 곳, 거대한 그림자가 움직였다.",
						"english": "Deep within the ancient ruins, a colossal shadow stirred.",
						"japanese": "古代遺跡の奥深く、巨大な影が蠢いた。",
						"chinese": "古代遗迹深处，一个巨大的身影开始移动。",
						"french": "Au plus profond des ruines antiques, une ombre colossale s'agita.",
						"spanish": "En lo profundo de las ruinas antiguas, una sombra colosal se movió.",
						"vietnamese": "Sâu thẳm trong di tích cổ đại, một bóng đen khổng lồ đã chuyển động.",
						"thai": "ลึกเข้าไปในซากปรักหักพังโบราณ เงาขนาดมหึมาได้เคลื่อนไหว",
						"hindi": "प्राचीन खंडहरों की गहराइयों में, एक विशाल छाया हिलने लगी।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…침입자인가. 이 혼돈 속에서 길을 잃었군.",
						"english": "...Intruders. Lost in this chaos, are we?",
						"japanese": "…侵入者か。この混沌の中で道に迷ったか。",
						"chinese": "……入侵者吗。迷失在这混沌之中了。",
						"french": "...Des intrus. Perdus dans ce chaos, n'est-ce pas ?",
						"spanish": "...Intrusos. ¿Perdidos en este caos?",
						"vietnamese": "...Kẻ xâm nhập sao. Lạc lối trong hỗn loạn này rồi à.",
						"thai": "ผู้บุกรุกรึ? หลงทางในความวุ่นวายนี้สินะ",
						"hindi": "घुसपैठिए? इस अराजकता में खो गए हो, है ना?"
					}
				},
				{
					"content": {
						"korean": "아슈르가 우릴 여기까지 이끈 건가…",
						"english": "Did Ashur lead us all the way here...?",
						"japanese": "アシュールが俺たちをここまで導いたのか…",
						"chinese": "是阿什尔把我们引到这里来的吗……",
						"french": "Est-ce qu'Ashur nous a menés jusqu'ici...?",
						"spanish": "¿Ashur nos trajo hasta aquí...?",
						"vietnamese": "Ashur đã dẫn chúng ta đến tận đây sao...?",
						"thai": "อาชูร์นำทางเรามาถึงที่นี่งั้นรึ...?",
						"hindi": "क्या अशूर हमें यहाँ तक ले आया...?"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "오만한 평화를 외치던 자들이여. 너희의 시대는 끝났다.",
						"english": "You who cried out for arrogant peace. Your era is over.",
						"japanese": "傲慢な平和を叫びし者たちよ。お前たちの時代は終わった。",
						"chinese": "那些叫嚣着傲慢和平的人啊。你们的时代结束了。",
						"french": "Vous qui prôniez une paix arrogante. Votre ère est révolue.",
						"spanish": "Vosotros que clamabais por una paz arrogante. Vuestra era ha terminado.",
						"vietnamese": "Hỡi những kẻ đã hô hào cho nền hòa bình ngạo mạn. Thời đại của các ngươi đã chấm dứt rồi.",
						"thai": "เจ้าผู้ที่ร่ำร้องหาความสงบสุขที่โอหัง ยุคสมัยของเจ้าได้สิ้นสุดลงแล้ว",
						"hindi": "हे अभिमानी शांति का दावा करने वालों। तुम्हारा युग समाप्त हो गया।"
					},
					"type": "speech",
					"speaker": "random_boss"
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "크윽… 무지한 자여… 이 끝없는 증오는…",
						"english": "Ugh... Ignorant one... This endless hatred...",
						"japanese": "くっ…無知な者め…この終わりのない憎悪は…",
						"chinese": "咳……无知之人啊……这无尽的憎恨……",
						"french": "Ugh... Ignorant... Cette haine sans fin...",
						"spanish": "Ugh... Ignorante... Este odio interminable...",
						"vietnamese": "Khụ... Kẻ ngu muội... Hận thù vô tận này...",
						"thai": "อึก... ผู้โง่เขลาเอ๋ย... ความเกลียดชังอันไร้สิ้นสุดนี้...",
						"hindi": "उफ़... अज्ञानी... यह अंतहीन घृणा..."
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "…결코 끝나지 않아. 평화를 향한 혐오는…",
						"english": "...It never ends. The hatred for peace...",
						"japanese": "...終わらない。平和への憎悪は...",
						"chinese": "...永无止境。对和平的憎恶...",
						"french": "...Cela ne finit jamais. La haine de la paix...",
						"spanish": "...Nunca termina. El odio por la paz...",
						"vietnamese": "...Nó không bao giờ kết thúc. Sự căm ghét hòa bình...",
						"thai": "...มันไม่มีวันสิ้นสุด ความเกลียดชังต่อสันติภาพ...",
						"hindi": "...यह कभी ख़त्म नहीं होता। शांति के प्रति घृणा..."
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이게 끝이라고 믿지 않아. 아슈르…",
						"english": "I don't believe this is the end. Ashur...",
						"japanese": "これが終わりだとは信じない。アシュル...",
						"chinese": "我不相信这是结局。阿舒尔...",
						"french": "Je ne crois pas que ce soit la fin. Ashur...",
						"spanish": "No creo que este sea el final. Ashur...",
						"vietnamese": "Tôi không tin đây là kết thúc. Ashur...",
						"thai": "ฉันไม่เชื่อว่านี่คือจุดจบ อาชูร์...",
						"hindi": "मुझे नहीं लगता कि यह अंत है। अशूर..."
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"action": "enter",
					"type": "direction",
					"speaker": "ashur",
					"spot": [
						1,
						2
					],
					"duration_ms": 500
				},
				{
					"speaker": "ashur",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…이기다니. 내가 틀렸던 건가.",
						"english": "...I won. Was I wrong?",
						"japanese": "...勝ったのか。私が間違っていたのか。",
						"chinese": "...我赢了。难道我错了吗？",
						"french": "...J'ai gagné. Me serais-je trompé ?",
						"spanish": "...Gané. ¿Me equivoqué?",
						"vietnamese": "...Tôi thắng rồi. Tôi đã sai sao?",
						"thai": "...ฉันชนะแล้ว ฉันคิดผิดหรือเปล่า?",
						"hindi": "...मैं जीत गया। क्या मैं गलत था?"
					}
				},
				{
					"content": {
						"korean": "배신의 그림자는 사라지지 않았다. 사막의 혼돈은 더욱 깊어질 뿐.",
						"english": "The shadow of betrayal never faded. The chaos of the desert only deepened.",
						"japanese": "裏切りの影は消えなかった。砂漠の混沌は深まるばかり。",
						"chinese": "背叛的阴影从未消散。沙漠的混沌只会愈发深沉。",
						"french": "L'ombre de la trahison n'a jamais disparu. Le chaos du désert ne fit que s'intensifier.",
						"spanish": "La sombra de la traición nunca se desvaneció. El caos del desierto solo se profundizó.",
						"vietnamese": "Bóng tối phản bội không bao giờ tan biến. Sự hỗn loạn của sa mạc chỉ càng sâu sắc hơn.",
						"thai": "เงาของการทรยศไม่เคยจางหายไป ความวุ่นวายของทะเลทรายมีแต่จะลึกซึ้งขึ้น",
						"hindi": "विश्वासघात की छाया कभी नहीं मिटी। रेगिस्तान का अराजकता और गहराता गया।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"id": 15
		}
	]
} as const;
