export const scenario_hell_fidget_12_04 = {
	"scenario_id": "hell_fidget_12_04",
	"order": 4,
	"act": "rising",
	"theme": "hell",
	"actors": {
		"cinder": {
			"id": "mon_7bdc5bba-75ec-4589-827e-193b3c59b022",
			"name": {
				"korean": "신더",
				"english": "Cinder",
				"japanese": "シンダー",
				"chinese": "辛德",
				"french": "Cinder",
				"spanish": "Cinder",
				"vietnamese": "Xinder",
				"thai": "ซินเดอร์",
				"hindi": "सिंडर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/bc21258b-93ac-4669-7330-fdf4e8a57c00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/939a1911-1849-425c-67a4-4958bbdc3300/public"
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
						"korean": "찢어진 서류들이 유령처럼 맴돌았다. 혼돈 속에서도 묘한 규칙이 느껴졌다.",
						"english": "Torn papers swirled like ghosts. Even in chaos, a strange order was felt.",
						"japanese": "破れた書類が幽霊のように舞っていた。混沌の中にも奇妙な規則性が感じられた。",
						"chinese": "破碎的文书如幽灵般盘旋。即使在混沌中，也能感受到一丝奇特的规律。",
						"french": "Des papiers déchirés tourbillonnaient comme des fantômes. Même dans le chaos, on ressentait un étrange ordre.",
						"spanish": "Papeles rotos revoloteaban como fantasmas. Incluso en el caos, se sentía un orden extraño.",
						"vietnamese": "Những tờ giấy rách bay lượn như bóng ma. Ngay cả trong hỗn loạn, một trật tự kỳ lạ vẫn được cảm nhận.",
						"thai": "เอกสารที่ฉีกขาดวนเวียนเหมือนผี แม้ในความวุ่นวายก็ยังรู้สึกถึงระเบียบที่แปลกประหลาด",
						"hindi": "फटे हुए कागज़ भूतों की तरह मंडरा रहे थे। अराजकता में भी एक अजीब सा नियम महसूस हो रहा था।"
					},
					"speaker": "narrator"
				},
				{
					"action": "enter",
					"type": "direction",
					"speaker": "cinder",
					"duration_ms": 500,
					"spot": [
						3,
						2
					]
				},
				{
					"speaker": "cinder",
					"content": {
						"korean": "Fidget의 광기가 지옥의 질서를 망치고 있어.",
						"english": "Fidget's madness is ruining Hell's order.",
						"japanese": "Fidgetの狂気が地獄の秩序を壊している。",
						"chinese": "Fidget的疯狂正在破坏地狱的秩序。",
						"french": "La folie de Fidget est en train de détruire l'ordre des Enfers.",
						"spanish": "La locura de Fidget está arruinando el orden del Infierno.",
						"vietnamese": "Sự điên rồ của Fidget đang phá hủy trật tự của Địa ngục.",
						"thai": "ความบ้าคลั่งของ Fidget กำลังทำลายระเบียบของนรก",
						"hindi": "फिगेट का पागलपन नर्क की व्यवस्था को बिगाड़ रहा है।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "Fidget이라면… 그 접수원?",
						"english": "Fidget... the receptionist?",
						"japanese": "Fidgetって…あの受付係？",
						"chinese": "Fidget…那个接待员？",
						"french": "Fidget... le réceptionniste ?",
						"spanish": "¿Fidget... el recepcionista?",
						"vietnamese": "Fidget... người tiếp tân đó ư?",
						"thai": "Fidget... พนักงานต้อนรับคนนั้นเหรอ?",
						"hindi": "फिगेट... वह रिसेप्शनिस्ट?"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "그는 단순한 접수원이 아니야. 혼돈을 설계하는 자지.",
						"english": "He's not just a receptionist. He's the architect of chaos.",
						"japanese": "彼は単なる受付係じゃない。混沌を設計する者だ。",
						"chinese": "他不是简单的接待员。他是混乱的设计者。",
						"french": "Ce n'est pas un simple réceptionniste. C'est l'architecte du chaos.",
						"spanish": "No es solo un recepcionista. Es el arquitecto del caos.",
						"vietnamese": "Hắn không chỉ là một người tiếp tân. Hắn là kẻ kiến tạo sự hỗn loạn.",
						"thai": "เขาไม่ใช่แค่พนักงานต้อนรับ เขาคือผู้ออกแบบความวุ่นวาย",
						"hindi": "वह सिर्फ़ एक रिसेप्शनिस्ट नहीं है। वह अराजकता का वास्तुकार है।"
					},
					"speaker": "cinder",
					"emotion": "angry",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "cinder",
					"duration_ms": 500,
					"spot": [
						4,
						2
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "그는 모든 것을 분류하려 해. 심지어 고통마저도.",
						"english": "He tries to classify everything. Even pain.",
						"japanese": "彼はすべてを分類しようとする。苦痛でさえも。",
						"chinese": "他试图分类一切。甚至包括痛苦。",
						"french": "Il essaie de tout classer. Même la douleur.",
						"spanish": "Intenta clasificarlo todo. Incluso el dolor.",
						"vietnamese": "Hắn cố gắng phân loại mọi thứ. Ngay cả nỗi đau.",
						"thai": "เขาพยายามจัดหมวดหมู่ทุกสิ่ง แม้กระทั่งความเจ็บปวด",
						"hindi": "वह सब कुछ वर्गीकृत करने की कोशिश करता है। यहाँ तक कि दर्द भी।"
					},
					"speaker": "cinder"
				},
				{
					"content": {
						"korean": "그게 지옥의 질서라고?",
						"english": "That's the order of hell?",
						"japanese": "それが地獄の秩序だと？",
						"chinese": "那就是地狱的秩序吗？",
						"french": "C'est ça, l'ordre de l'enfer ?",
						"spanish": "¿Ese es el orden del infierno?",
						"vietnamese": "Đó là trật tự của địa ngục sao?",
						"thai": "นั่นคือระเบียบของนรกหรือ?",
						"hindi": "क्या यही नरक का क्रम है?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "cinder",
					"content": {
						"korean": "아니. 그건 질서가 아니야. 광기어린 재분류지.",
						"english": "No. That's not order. It's a mad reclassification.",
						"japanese": "違う。それは秩序じゃない。狂気じみた再分類だ。",
						"chinese": "不。那不是秩序。那是疯狂的重新分类。",
						"french": "Non. Ce n'est pas l'ordre. C'est une reclassification folle.",
						"spanish": "No. Eso no es orden. Es una reclasificación demencial.",
						"vietnamese": "Không. Đó không phải là trật tự. Đó là sự phân loại lại điên rồ.",
						"thai": "ไม่ นั่นไม่ใช่ระเบียบ มันคือการจัดหมวดหมู่ใหม่ที่บ้าคลั่ง",
						"hindi": "नहीं। वह व्यवस्था नहीं है। वह एक पागल पुनर्वर्गीकरण है।"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_1",
					"content": {
						"korean": "우리는… 어디에도 분류되지 못했지.",
						"english": "We... weren't classified anywhere.",
						"japanese": "私たちは…どこにも分類されなかった。",
						"chinese": "我们…没有被分类到任何地方。",
						"french": "Nous... n'avons été classés nulle part.",
						"spanish": "Nosotros... no fuimos clasificados en ningún lugar.",
						"vietnamese": "Chúng ta... không được phân loại ở bất cứ đâu.",
						"thai": "เรา... ไม่ได้ถูกจัดหมวดหมู่ที่ไหนเลย",
						"hindi": "हमें... कहीं भी वर्गीकृत नहीं किया गया।"
					}
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						2,
						2
					],
					"duration_ms": 500,
					"speaker": "cinder",
					"type": "direction",
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "cinder",
					"content": {
						"korean": "Fidget은 모든 혼란을 분류함으로써 질서를 만든다고 믿어.",
						"english": "Fidget believes he creates order by classifying all chaos.",
						"japanese": "Fidgetは、あらゆる混沌を分類することで秩序を生み出すと信じている。",
						"chinese": "Fidget相信，他通过分类所有混乱来创造秩序。",
						"french": "Fidget croit créer l'ordre en classifiant tout le chaos.",
						"spanish": "Fidget cree que crea orden clasificando todo el caos.",
						"vietnamese": "Fidget tin rằng anh ta tạo ra trật tự bằng cách phân loại mọi hỗn loạn.",
						"thai": "Fidget เชื่อว่าเขาจะสร้างระเบียบได้ด้วยการจัดหมวดหมู่ความสับสนวุ่นวายทั้งหมด",
						"hindi": "फिडगेट मानता है कि वह सभी अव्यवस्थाओं को वर्गीकृत करके व्यवस्था बनाता है।"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "그게 어떻게 질서가 돼?",
						"english": "How does that become order?",
						"japanese": "それがどうして秩序になる？",
						"chinese": "那怎么会变成秩序呢？",
						"french": "Comment cela devient-il de l'ordre ?",
						"spanish": "¿Cómo se convierte eso en orden?",
						"vietnamese": "Làm sao điều đó trở thành trật tự được?",
						"thai": "นั่นจะกลายเป็นระเบียบได้อย่างไร?",
						"hindi": "वह व्यवस्था कैसे बन सकती है?"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "끔찍한 혼돈 속, 묘하게 정돈된 서류 더미가 눈에 띄었다. 이질적이었다.",
						"english": "Amidst the terrible chaos, a strangely organized stack of documents stood out. It felt out of place.",
						"japanese": "恐ろしい混沌の中、奇妙に整頓された書類の山が目についた。それは異質だった。",
						"chinese": "在可怕的混乱中，一堆奇怪地整理过的文件引人注目。它显得格格不入。",
						"french": "Au milieu du chaos terrible, une pile de documents étrangement organisée se démarquait. C'était incongru.",
						"spanish": "En medio del terrible caos, una pila de documentos extrañamente organizada destacaba. Era discordante.",
						"vietnamese": "Giữa sự hỗn loạn khủng khiếp, một chồng tài liệu được sắp xếp kỳ lạ nổi bật. Nó thật khác biệt.",
						"thai": "ท่ามกลางความโกลาหลอันน่าสะพรึงกลัว กองเอกสารที่จัดเรียงอย่างแปลกประหลาดโดดเด่นออกมา มันรู้สึกไม่เข้าที่",
						"hindi": "भयंकर अराजकता के बीच, दस्तावेजों का एक अजीब तरह से व्यवस्थित ढेर दिखाई दिया। वह बेमेल था।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "cinder",
					"content": {
						"korean": "분류되지 않은 것은… 끝없이 맴돌 뿐이지.",
						"english": "The unclassified... just wander endlessly.",
						"japanese": "分類されていないものは…ただ永遠に彷徨うだけだ。",
						"chinese": "未分类的东西…只会无止境地徘徊。",
						"french": "Ceux qui ne sont pas classifiés... errent sans fin.",
						"spanish": "Lo no clasificado... simplemente vaga sin cesar.",
						"vietnamese": "Những thứ không được phân loại... chỉ quanh quẩn mãi không thôi.",
						"thai": "สิ่งที่ไม่ได้ถูกจัดหมวดหมู่... ก็แค่ล่องลอยไปไม่รู้จบ",
						"hindi": "अवर्गीकृत... बस अनंत काल तक भटकते रहते हैं।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_2",
					"content": {
						"korean": "우리처럼… 이곳을 영원히 떠돌게 된다는 거야?",
						"english": "Like us... will they wander here forever?",
						"japanese": "私たちのように…ここを永遠にさまようことになるのか？",
						"chinese": "像我们一样…会永远在这里游荡吗？",
						"french": "Comme nous... vont-ils errer ici pour toujours ?",
						"spanish": "¿Como nosotros... vagarán aquí para siempre?",
						"vietnamese": "Giống như chúng ta... họ sẽ lang thang ở đây mãi mãi sao?",
						"thai": "เหมือนพวกเรา... พวกเขาจะล่องลอยอยู่ที่นี่ตลอดไปหรือ?",
						"hindi": "क्या हमारी तरह... वे भी यहाँ हमेशा के लिए भटकते रहेंगे?"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…그게 Fidget이 바라는 새로운 질서야.",
						"english": "...That's the new order Fidget desires.",
						"japanese": "…それがFidgetが望む新しい秩序だ。",
						"chinese": "……那就是Fidget所希望的新秩序。",
						"french": "...C'est le nouvel ordre que Fidget désire.",
						"spanish": "...Ese es el nuevo orden que Fidget desea.",
						"vietnamese": "...Đó là trật tự mới mà Fidget mong muốn.",
						"thai": "...นั่นคือระเบียบใหม่ที่ Fidget ต้องการ",
						"hindi": "...वह नई व्यवस्था है जो फिडगेट चाहता है।"
					},
					"speaker": "cinder"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"speaker": "cinder",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "우리가 겪는 모든 혼란이 Fidget의 의도였다고?",
						"english": "All the chaos we experienced was Fidget's intention?",
						"japanese": "私たちが経験したすべての混乱はFidgetの意図だったと？",
						"chinese": "我们经历的所有混乱都是Fidget的意图吗？",
						"french": "Tout le chaos que nous avons vécu était l'intention de Fidget ?",
						"spanish": "¿Todo el caos que experimentamos fue intención de Fidget?",
						"vietnamese": "Tất cả sự hỗn loạn mà chúng ta đã trải qua đều là ý định của Fidget sao?",
						"thai": "ความสับสนวุ่นวายทั้งหมดที่เราเผชิญคือความตั้งใจของ Fidget หรือ?",
						"hindi": "क्या हमने जो भी अराजकता अनुभव की, वह सब फिडगेट का इरादा था?"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "cinder",
					"content": {
						"korean": "그는 자신의 그림자를 이용해… 이 지옥을 조종하고 있어.",
						"english": "He's using his shadow... to control this hell.",
						"japanese": "彼は自分の影を使って…この地獄を操っている。",
						"chinese": "他在利用自己的影子…操纵着这个地狱。",
						"french": "Il utilise son ombre... pour contrôler cet enfer.",
						"spanish": "Él usa su sombra... para controlar este infierno.",
						"vietnamese": "Hắn đang dùng bóng tối của mình... để điều khiển địa ngục này.",
						"thai": "เขาใช้เงาของเขา... เพื่อควบคุมนรกนี้",
						"hindi": "वह अपनी छाया का उपयोग करके... इस नर्क को नियंत्रित कर रहा है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "길 잃은 영혼들이 맴돌았다. 익숙한 고통을 반복하듯.",
						"english": "Lost souls wandered. Repeating familiar pain.",
						"japanese": "迷いし魂がさまよっていた。慣れた苦痛を繰り返すように。",
						"chinese": "迷失的灵魂徘徊着。仿佛重复着熟悉的痛苦。",
						"french": "Les âmes perdues erraient. Répétant une douleur familière.",
						"spanish": "Almas perdidas deambulaban. Repitiendo un dolor familiar.",
						"vietnamese": "Những linh hồn lạc lối lang thang. Lặp lại nỗi đau quen thuộc.",
						"thai": "วิญญาณที่หลงทางวนเวียน ราวกับย้ำรอยความเจ็บปวดที่คุ้นเคย",
						"hindi": "भटकी हुई आत्माएं भटक रही थीं। जैसे परिचित दर्द दोहरा रही हों।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "character_3",
					"content": {
						"korean": "그럼 우린… 영원히 분류되지 못하고 맴돌다 죽는 거야?",
						"english": "So... are we doomed to wander forever, unclassified, until death?",
						"japanese": "じゃあ、俺たちは…永遠に分類されずに、さまよい死ぬのか？",
						"chinese": "那么我们…会永远无法被分类，然后徘徊至死吗？",
						"french": "Alors… sommes-nous condamnés à errer éternellement, non classifiés, jusqu'à la mort ?",
						"spanish": "¿Estamos condenados a vagar para siempre, sin clasificar, hasta la muerte?",
						"vietnamese": "Vậy chúng ta… sẽ mãi mãi không được phân loại, cứ thế lang thang cho đến chết sao?",
						"thai": "ถ้าอย่างนั้นพวกเรา... ก็จะวนเวียนอยู่อย่างนี้ โดยไม่ถูกจำแนกจนตายงั้นเหรอ?",
						"hindi": "तो क्या हम... हमेशा के लिए अवर्गीकृत भटकते रहेंगे, जब तक मर नहीं जाते?"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "아니. 이 혼돈의 근원을 막아야 해. Fidget을 쫓는다!",
						"english": "No. We must stop the source of this chaos. Chase Fidget!",
						"japanese": "いや。この混沌の根源を止めなければ。Fidgetを追う！",
						"chinese": "不。我们必须阻止这混沌的根源。追Fidget！",
						"french": "Non. Nous devons arrêter la source de ce chaos. À la poursuite de Fidget !",
						"spanish": "No. Debemos detener la fuente de este caos. ¡Persigamos a Fidget!",
						"vietnamese": "Không. Chúng ta phải ngăn chặn nguồn gốc của sự hỗn loạn này. Đuổi theo Fidget!",
						"thai": "ไม่ เราต้องหยุดต้นตอของความวุ่นวายนี้ ไล่ตาม Fidget!",
						"hindi": "नहीं। हमें इस अराजकता के स्रोत को रोकना होगा। Fidget का पीछा करो!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "…그도 분류될 수 있다면, 좋겠네.",
						"english": "...I hope he can be classified too.",
						"japanese": "…彼も分類されるなら、いいのだが。",
						"chinese": "…如果他也能被分类，那就好了。",
						"french": "…J'espère qu'il pourra aussi être classifié.",
						"spanish": "…Ojalá él también pueda ser clasificado.",
						"vietnamese": "…Nếu hắn cũng có thể được phân loại thì tốt.",
						"thai": "...ถ้าเขาถูกจำแนกได้ก็คงจะดี",
						"hindi": "...काश उसे भी वर्गीकृत किया जा सके।"
					},
					"speaker": "cinder",
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…분류되지 않은 너희도… 언젠가는 Fidget의 질서에 편입될 것이다.",
						"english": "...Even you, the unclassified... will eventually be assimilated into Fidget's order.",
						"japanese": "「…分類されざるお前たちも… いずれFidgetの秩序に組み込まれるだろう。」",
						"chinese": "“……你们这些未分类者……终有一天也会被纳入Fidget的秩序。”",
						"french": "...Même vous, les non-classifiés... serez un jour assimilés à l'ordre de Fidget.",
						"spanish": "...Incluso ustedes, los no clasificados... algún día serán asimilados al orden de Fidget.",
						"vietnamese": "...Ngay cả các ngươi, những kẻ không được phân loại... rồi cũng sẽ bị đồng hóa vào trật tự của Fidget.",
						"thai": "...แม้แต่พวกเจ้าผู้ไม่ถูกจัดประเภท... ก็จะถูกรวมเข้าสู่ระเบียบของ Fidget ในที่สุด",
						"hindi": "...तुम भी, जो अवर्गीकृत हो... अंततः Fidget की व्यवस्था में समाहित हो जाओगे।"
					},
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "헛소리! 이 혼돈을 끝낼 거야.",
						"english": "Nonsense! I'll end this chaos.",
						"japanese": "「戯言だ！ この混沌を終わらせる！」",
						"chinese": "“胡说八道！我要结束这场混乱！”",
						"french": "Absurdités ! Je mettrai fin à ce chaos.",
						"spanish": "¡Tonterías! Acabaré con este caos.",
						"vietnamese": "Vô lý! Ta sẽ chấm dứt sự hỗn loạn này.",
						"thai": "เหลวไหล! ข้าจะยุติความวุ่นวายนี้เอง",
						"hindi": "बकवास! मैं इस अराजकता का अंत करूँगा।"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "cinder",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter"
				},
				{
					"content": {
						"korean": "Fidget의 그림자는 쉽게 사라지지 않아. …진정한 혼돈은 이제부터 시작이야.",
						"english": "Fidget's shadow won't vanish so easily. ...True chaos begins now.",
						"japanese": "「Fidgetの影はそう簡単には消えない。…真の混沌は、ここから始まるのだ。」",
						"chinese": "“Fidget的阴影不会轻易消失。……真正的混乱现在才开始。”",
						"french": "L'ombre de Fidget ne disparaîtra pas si facilement. ...Le véritable chaos commence maintenant.",
						"spanish": "La sombra de Fidget no desaparecerá tan fácilmente. ...El verdadero caos comienza ahora.",
						"vietnamese": "Bóng tối của Fidget sẽ không biến mất dễ dàng đâu. ...Sự hỗn loạn thật sự bắt đầu từ bây giờ.",
						"thai": "เงาของ Fidget ไม่ได้หายไปง่ายๆ หรอก ...ความวุ่นวายที่แท้จริงเพิ่งจะเริ่มต้นขึ้นต่างหาก",
						"hindi": "Fidget की छाया इतनी आसानी से नहीं मिटेगी। ...असली अराजकता अब शुरू होती है।"
					},
					"speaker": "cinder",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "Fidget의 그림자는 더욱 깊은 곳으로 이어졌다. 혼돈의 심장부를 향하여.",
						"english": "Fidget's shadow led to deeper places. Towards the heart of chaos.",
						"japanese": "「Fidgetの影は、さらに深き場所へと続いた。混沌の心臓部を目指して。」",
						"chinese": "“Fidget的阴影延伸向更深处。直指混沌的核心。”",
						"french": "L'ombre de Fidget menait vers des lieux plus profonds. Vers le cœur du chaos.",
						"spanish": "La sombra de Fidget condujo a lugares más profundos. Hacia el corazón del caos.",
						"vietnamese": "Bóng tối của Fidget dẫn lối đến những nơi sâu thẳm hơn. Hướng về trung tâm của sự hỗn loạn.",
						"thai": "เงาของ Fidget นำไปสู่สถานที่ที่ลึกล้ำยิ่งขึ้น มุ่งสู่ใจกลางแห่งความวุ่นวาย",
						"hindi": "Fidget की छाया और भी गहरे स्थानों तक ले गई। अराजकता के केंद्र की ओर।"
					}
				}
			],
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "분류되지 않은 고통들이 다시 탐험대를 덮쳤다.",
						"english": "Unclassified torments once again overwhelmed the expedition.",
						"japanese": "「分類されざる苦痛が、再び探検隊を襲った。」",
						"chinese": "“未分类的痛苦再次吞噬了探险队。”",
						"french": "Les tourments non classifiés ont de nouveau submergé l'expédition.",
						"spanish": "Los tormentos no clasificados volvieron a abrumar a la expedición.",
						"vietnamese": "Những nỗi thống khổ chưa được phân loại lại một lần nữa nhấn chìm đoàn thám hiểm.",
						"thai": "ความเจ็บปวดที่ยังไม่ถูกจัดประเภทโจมตีคณะสำรวจอีกครั้ง",
						"hindi": "अवर्गीकृत पीड़ाओं ने एक बार फिर अभियान दल को घेर लिया।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…너희는 결국, Fidget의 질서에 흡수될 뿐이다.",
						"english": "...In the end, you will merely be absorbed into Fidget's order.",
						"japanese": "「…お前たちは結局、Fidgetの秩序に吸収されるだけだ。」",
						"chinese": "“……你们最终，只会融入Fidget的秩序。”",
						"french": "...Au final, vous ne ferez que vous fondre dans l'ordre de Fidget.",
						"spanish": "...Al final, solo serás absorbido por el orden de Fidget.",
						"vietnamese": "...Cuối cùng, các ngươi cũng chỉ bị hấp thụ vào trật tự của Fidget mà thôi.",
						"thai": "...ในที่สุด เจ้าก็จะถูกกลืนกินเข้าสู่ระเบียบของ Fidget เท่านั้น",
						"hindi": "...तुम अंततः, Fidget की व्यवस्था में समाहित हो जाओगे।"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "절대 포기하지 않아. Fidget을 찾아낼 거야.",
						"english": "I'll never give up. I'll find Fidget.",
						"japanese": "「絶対に諦めない。Fidgetを見つけ出す！」",
						"chinese": "“绝不放弃。我会找到Fidget。”",
						"french": "Je n'abandonnerai jamais. Je trouverai Fidget.",
						"spanish": "Nunca me rendiré. Encontraré a Fidget.",
						"vietnamese": "Tuyệt đối không từ bỏ. Ta sẽ tìm ra Fidget.",
						"thai": "ข้าจะไม่มีวันยอมแพ้ ข้าจะหา Fidget ให้เจอ",
						"hindi": "मैं कभी हार नहीं मानूँगा। मैं Fidget को ढूँढ लूँगा।"
					},
					"type": "speech",
					"emotion": "angry"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "분류되지 않은 고통들이 엉겨 붙은 거대한 그림자가 길을 막아섰다.",
						"english": "A colossal shadow, intertwined with unclassified pains, blocked the way.",
						"japanese": "未分類の苦痛が絡みついた巨大な影が道を塞いだ。",
						"chinese": "缠绕着未分类痛苦的巨大影子，挡住了去路。",
						"french": "Une ombre colossale, entrelacée de douleurs non classifiées, bloqua le chemin.",
						"spanish": "Una sombra colosal, entrelazada con dolores no clasificados, bloqueó el camino.",
						"vietnamese": "Một cái bóng khổng lồ, quấn lấy những nỗi đau chưa được phân loại, chặn đường.",
						"thai": "เงามหึมาที่พันเกี่ยวไปด้วยความเจ็บปวดที่ยังไม่ถูกจำแนก ขวางทางอยู่",
						"hindi": "अवर्गीकृत पीड़ाओं से गुंथी हुई एक विशाल छाया ने रास्ता रोक दिया।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "드디어 여기까지 왔군. …아직 분류되지 않은 존재들이여.",
						"english": "You've finally made it here. ...Unclassified beings.",
						"japanese": "ついにここまで来たか。…まだ分類されざる者たちよ。",
						"chinese": "你们终于到这里了。…尚未被分类的存在们。",
						"french": "Vous êtes enfin arrivés ici. …Êtres non classifiés.",
						"spanish": "Finalmente han llegado hasta aquí. …Seres no clasificados.",
						"vietnamese": "Cuối cùng các ngươi cũng đến đây. …Những kẻ chưa được phân loại.",
						"thai": "ในที่สุดพวกเจ้าก็มาถึงที่นี่... เหล่าสิ่งมีชีวิตที่ยังไม่ถูกจำแนก",
						"hindi": "आखिरकार तुम यहाँ आ ही गए। ...अवर्गीकृत प्राणी।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "Fidget의 부하인가?",
						"english": "Fidget's subordinate?",
						"japanese": "Fidgetの手下か？",
						"chinese": "Fidget的手下吗？",
						"french": "Le subordonné de Fidget ?",
						"spanish": "¿Subordinado de Fidget?",
						"vietnamese": "Ngươi là thuộc hạ của Fidget à?",
						"thai": "ลูกน้องของ Fidget งั้นหรือ?",
						"hindi": "Fidget का अधीनस्थ?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "나는 Fidget의 완벽한 질서… 그 자체다.",
						"english": "I am Fidget's perfect order... itself.",
						"japanese": "私はFidgetの完璧なる秩序…そのものだ。",
						"chinese": "我是Fidget的完美秩序…本身。",
						"french": "Je suis l'ordre parfait de Fidget… en personne.",
						"spanish": "Soy el orden perfecto de Fidget... en persona.",
						"vietnamese": "Ta là trật tự hoàn hảo của Fidget… chính nó.",
						"thai": "ข้าคือระเบียบอันสมบูรณ์แบบของ Fidget... ตัวตนนั้นเอง",
						"hindi": "मैं Fidget का पूर्ण क्रम... स्वयं हूँ।"
					},
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "웃기지 마! 그건 광기일 뿐이야!",
						"english": "Don't make me laugh! That's just madness!",
						"japanese": "笑わせるな！それは狂気でしかない！",
						"chinese": "别开玩笑了！那只是疯癫而已！",
						"french": "Ne me fais pas rire ! Ce n'est que folie !",
						"spanish": "¡No me hagas reír! ¡Eso es pura locura!",
						"vietnamese": "Đừng làm ta cười! Đó chỉ là sự điên rồ thôi!",
						"thai": "อย่ามาล้อเล่น! นั่นมันแค่ความบ้าคลั่งเท่านั้น!",
						"hindi": "मुझे हँसाओ मत! वह तो बस पागलपन है!"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"지옥 행정실의 혼돈은 끝이 없었다.",
			"분류되지 않은 존재들은 영원히 미로를 헤맸다.",
			"낯선 조력자의 경고, Fidget의 광기가 지옥을 삼킨다는데.",
			"그러나 그 진실은, 단순한 혼란이 아니었다.",
			"우리 역시, 그 분류의 늪 속으로 빨려 들어가고 있었다."
		],
		"english": [
			"The chaos in the Hell Administration Office was endless.",
			"Unclassified beings wandered the labyrinth forever.",
			"A strange helper's warning: Fidget's madness threatens to engulf Hell.",
			"But the truth was, it wasn't just simple chaos.",
			"We too were being dragged into that swamp of classification."
		],
		"japanese": [
			"地獄管理局の混沌は終わりがなかった。",
			"未分類の存在たちは永遠に迷路をさまよった。",
			"見知らぬ協力者の警告、Fidgetの狂気が地獄を飲み込むという。",
			"しかし、その真実は単純な混乱ではなかった。",
			"我々もまた、その分類の沼へと引きずり込まれていた。"
		],
		"chinese": [
			"地狱管理处的混乱永无止境。",
			"未分类的生灵永远在迷宫中徘徊。",
			"陌生帮手的警告，Fidget的疯狂据说会吞噬地狱。",
			"然而真相并非简单的混乱。",
			"我们也被卷入了那分类的泥沼之中。"
		],
		"french": [
			"Le chaos au Bureau d'Administration des Enfers était sans fin.",
			"Les êtres non classifiés erraient éternellement dans le labyrinthe.",
			"L'avertissement d'un étrange allié : la folie de Fidget menace d'engloutir les Enfers.",
			"Mais la vérité était que ce n'était pas un simple chaos.",
			"Nous aussi, nous étions aspirés dans ce marécage de classification."
		],
		"spanish": [
			"El caos en la Oficina de Administración del Infierno era interminable.",
			"Los seres no clasificados vagaban por el laberinto eternamente.",
			"La advertencia de un extraño ayudante: la locura de Fidget amenaza con engullir el Infierno.",
			"Pero la verdad era que no era un simple caos.",
			"Nosotros también estábamos siendo arrastrados a ese pantano de clasificación."
		],
		"vietnamese": [
			"Sự hỗn loạn trong Văn phòng Hành chính Địa ngục là vô tận.",
			"Những sinh vật chưa được phân loại mãi mãi lang thang trong mê cung.",
			"Lời cảnh báo từ một người giúp đỡ lạ mặt: sự điên rồ của Fidget đang nuốt chửng Địa ngục.",
			"Nhưng sự thật không phải là một sự hỗn loạn đơn thuần.",
			"Chúng ta cũng đang bị kéo vào vũng lầy phân loại đó."
		],
		"thai": [
			"ความวุ่นวายในสำนักงานปกครองนรกไม่มีที่สิ้นสุด",
			"สิ่งมีชีวิตที่ไม่ถูกจัดหมวดหมู่หลงทางอยู่ในเขาวงกตตลอดไป",
			"คำเตือนจากผู้ช่วยเหลือที่ไม่คุ้นเคย ความบ้าคลั่งของ Fidget กำลังกลืนกินนรก",
			"แต่ความจริงแล้ว มันไม่ใช่แค่ความวุ่นวายธรรมดา",
			"เราเองก็กำลังถูกดึงดูดเข้าสู่บึงของการจัดหมวดหมู่นั้น"
		],
		"hindi": [
			"नर्क के प्रशासनिक कार्यालय में अराजकता अनंत थी।",
			"अवर्गीकृत प्राणी अनंत काल तक भूलभुलैया में भटकते रहे।",
			"एक अजनबी सहायक की चेतावनी, फिगेट का पागलपन नर्क को निगल रहा है।",
			"लेकिन सच्चाई यह थी कि यह सिर्फ़ साधारण अराजकता नहीं थी।",
			"हम भी उस वर्गीकरण के दलदल में धँसते जा रहे थे।"
		]
	}
} as const;
