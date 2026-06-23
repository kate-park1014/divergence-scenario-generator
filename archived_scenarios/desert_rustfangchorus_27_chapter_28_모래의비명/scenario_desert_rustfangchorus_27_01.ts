export const scenario_desert_rustfangchorus_27_01 = {
	"scenario_id": "desert_rustfangchorus_27_01",
	"order": 1,
	"act": "intro",
	"theme": "desert",
	"actors": {
		"kemet": {
			"id": "mon_2f8a1701-571b-40b5-92d9-69aa973cef18",
			"name": {
				"korean": "케메트",
				"english": "Kemet",
				"japanese": "ケメト",
				"chinese": "凯麦特",
				"french": "Kemet",
				"spanish": "Kemet",
				"vietnamese": "Kemet",
				"thai": "เคเมต",
				"hindi": "केमेट"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/fd9e93e0-2874-4647-0076-839718949500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8c3f2690-e8a9-44f5-4527-d8f8d4ea2800/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "거대한 황금빛 모래 언덕 너머, 낡은 유적의 그림자가 보였다.",
						"english": "Beyond the colossal golden dunes, the shadow of an ancient ruin emerged.",
						"japanese": "巨大な黄金の砂丘の向こうに、古びた遺跡の影が見えた。",
						"chinese": "巨大的金色沙丘之后，一座古老遗迹的影子显现。",
						"french": "Au-delà des dunes dorées colossales, l'ombre d'une vieille ruine apparut.",
						"spanish": "Más allá de las colosales dunas doradas, la sombra de una antigua ruina apareció.",
						"vietnamese": "Vượt qua những cồn cát vàng khổng lồ, bóng dáng của một phế tích cổ xưa hiện ra.",
						"thai": "เบื้องหลังเนินทรายสีทองขนาดมหึมา ปรากฏเงาของซากปรักหักพังเก่าแก่",
						"hindi": "विशाल सुनहरी रेत के टीलों के पार, एक प्राचीन खंडहर की परछाई दिखाई दी।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "여기가 사막 초입의 유적인가요?",
						"english": "Is this the ruin at the desert's edge?",
						"japanese": "ここが砂漠の入り口にある遺跡ですか？",
						"chinese": "这里是沙漠入口处的遗迹吗？",
						"french": "Est-ce la ruine à l'entrée du désert ?",
						"spanish": "¿Es esta la ruina al borde del desierto?",
						"vietnamese": "Đây có phải là phế tích ở rìa sa mạc không?",
						"thai": "นี่คือซากปรักหักพังตรงทางเข้าทะเลทรายหรือเปล่า?",
						"hindi": "क्या यह रेगिस्तान के किनारे पर स्थित खंडहर है?"
					}
				},
				{
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "kemet"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그래. 블레이드마스터 문명의 첫 흔적.",
						"english": "Yes. The first trace of the Blademaster civilization.",
						"japanese": "そうだ。ブレードマスター文明の最初の痕跡だ。",
						"chinese": "是的。剑术大师文明的第一个痕迹。",
						"french": "Oui. La première trace de la civilisation des Maîtres-Lames.",
						"spanish": "Sí. El primer rastro de la civilización Maestra de la Espada.",
						"vietnamese": "Đúng vậy. Dấu vết đầu tiên của nền văn minh Kiếm Sư.",
						"thai": "ใช่ ร่องรอยแรกของอารยธรรมดาบมาสเตอร์",
						"hindi": "हाँ। ब्लेडमास्टर सभ्यता का पहला निशान।"
					},
					"speaker": "kemet"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "kemet",
					"content": {
						"korean": "…이 금속성 울림, 예사롭지 않아. 불길한 기운이 느껴져.",
						"english": "...This metallic hum, it's unsettling. I feel an ominous presence.",
						"japanese": "…この金属音、ただ事じゃない。不吉な気配がする。",
						"chinese": "……这金属的轰鸣声，不寻常。我感觉到一股不祥的气息。",
						"french": "...Ce bourdonnement métallique, ce n'est pas ordinaire. Je ressens une aura sinistre.",
						"spanish": "...Este zumbido metálico, no es normal. Siento una presencia ominosa.",
						"vietnamese": "…Âm thanh kim loại này, thật bất thường. Tôi cảm thấy một luồng khí gở.",
						"thai": "...เสียงก้องกังวานของโลหะนี้ มันไม่ธรรมดา ฉันรู้สึกถึงพลังงานที่น่ากลัว",
						"hindi": "...यह धातुई गूँज, असामान्य है। मुझे एक अशुभ उपस्थिति महसूस हो रही है।"
					}
				}
			],
			"win_dialogue": [],
			"lose_dialogue": [],
			"id": 1
		},
		{
			"win_dialogue": [],
			"dialogue": [
				{
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "kemet"
				},
				{
					"content": {
						"korean": "점점 선명해지는군… 검들의 울음소리야.",
						"english": "It's getting clearer... the cries of swords.",
						"japanese": "だんだん鮮明になってくる…剣たちの叫び声だ。",
						"chinese": "越来越清晰了……是剑的哀嚎声。",
						"french": "Ça devient de plus en plus clair... les lamentations des épées.",
						"spanish": "Se está volviendo más claro... el lamento de las espadas.",
						"vietnamese": "Ngày càng rõ ràng... là tiếng kiếm gào thét.",
						"thai": "มันชัดเจนขึ้นเรื่อยๆ... เสียงร่ำไห้ของดาบ",
						"hindi": "यह और स्पष्ट होता जा रहा है... तलवारों की पुकार है।"
					},
					"speaker": "kemet",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "검들의 울음소리요? 환청 아니에요?",
						"english": "Cries of swords? Are you hallucinating?",
						"japanese": "剣たちの叫び声ですか？幻聴じゃないですか？",
						"chinese": "剑的哀嚎声？您不是幻听了吧？",
						"french": "Les lamentations des épées ? N'est-ce pas une hallucination ?",
						"spanish": "¿El lamento de las espadas? ¿No será una alucinación?",
						"vietnamese": "Tiếng kiếm gào thét ư? Không phải là ảo giác chứ?",
						"thai": "เสียงร่ำไห้ของดาบเหรอ? ไม่ใช่ภาพหลอนใช่ไหม?",
						"hindi": "तलवारों की पुकार? क्या आपको मतिभ्रम हो रहा है?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "멀리서 들려오는 기이한 검들의 울림이 사막의 뜨거운 공기 속에 알 수 없는 공포를 품고 일렁였다.",
						"english": "The eerie clang of swords from afar shimmered with an unknown dread in the hot desert air.",
						"japanese": "遠くから聞こえる奇妙な剣の響きが、砂漠の熱い空気の中に未知の恐怖を抱いて揺らめいた。",
						"chinese": "远处传来诡异的剑鸣声，在炙热的沙漠空气中带着未知的恐惧波动着。",
						"french": "Le cliquetis étrange des épées lointaines oscillait, imprégné d'une peur inconnue dans l'air chaud du désert.",
						"spanish": "El extraño tintineo de espadas a lo lejos vibraba con un terror desconocido en el aire caliente del desierto.",
						"vietnamese": "Tiếng kiếm kỳ lạ vang vọng từ xa, mang theo nỗi sợ hãi không tên, lay động trong không khí nóng bỏng của sa mạc.",
						"thai": "เสียงดาบประหลาดที่ดังมาจากที่ไกลๆ สั่นสะท้านไปด้วยความหวาดกลัวที่ไม่รู้จักในอากาศร้อนระอุของทะเลทราย",
						"hindi": "दूर से आती तलवारों की अजीब गूँज रेगिस्तान की तपती हवा में एक अनजान खौफ लिए लहरा रही थी।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "kemet",
					"content": {
						"korean": "아니. 이 땅은 저주받았어. 고통받는 존재들이 깨어나고 있어.",
						"english": "No. This land is cursed. Suffering beings are awakening.",
						"japanese": "いや。この土地は呪われている。苦しむ者たちが目覚めつつある。",
						"chinese": "不。这片土地被诅咒了。受苦的生灵正在苏醒。",
						"french": "Non. Cette terre est maudite. Des êtres souffrants se réveillent.",
						"spanish": "No. Esta tierra está maldita. Seres sufrientes están despertando.",
						"vietnamese": "Không. Vùng đất này bị nguyền rủa. Những linh hồn đau khổ đang thức tỉnh.",
						"thai": "ไม่ใช่ ดินแดนนี้ถูกสาปแช่ง สิ่งมีชีวิตที่ทนทุกข์กำลังตื่นขึ้น",
						"hindi": "नहीं। यह भूमि शापित है। पीड़ित प्राणी जागृत हो रहे हैं।"
					},
					"type": "speech",
					"emotion": "angry"
				}
			],
			"id": 3,
			"lose_dialogue": []
		},
		{
			"dialogue": [
				{
					"speaker": "kemet",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이걸 봐. 낡았지만 미세한 오팔빛으로 빛나.",
						"english": "Look at this. It's old, yet it gleams with a faint opal light.",
						"japanese": "これを見て。古いけれど、微かなオパール色に光っている。",
						"chinese": "看这个。它很旧，却闪烁着微弱的蛋白石光芒。",
						"french": "Regarde ça. C'est vieux, mais ça brille d'une faible lueur opaline.",
						"spanish": "Mira esto. Es viejo, pero brilla con una tenue luz opalina.",
						"vietnamese": "Nhìn xem. Nó cũ kỹ, nhưng lại lấp lánh ánh sáng xanh sữa mờ ảo.",
						"thai": "ดูนี่สิ เก่าแล้ว แต่ยังเปล่งประกายสีโอปอลจางๆ",
						"hindi": "इसे देखो। यह पुराना है, फिर भी इसमें हल्की ओपल जैसी चमक है।"
					},
					"speaker": "kemet"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "오팔빛… 낡은 검 조각이요?",
						"english": "Opal light... an old sword fragment?",
						"japanese": "オパール色の… 古い剣の破片ですか？",
						"chinese": "蛋白石光芒… 旧剑碎片吗？",
						"french": "Une lueur opaline… un vieux fragment d'épée ?",
						"spanish": "¿Luz opalina… un fragmento de espada viejo?",
						"vietnamese": "Ánh sáng xanh sữa… một mảnh kiếm cũ ư?",
						"thai": "แสงโอปอล… เศษดาบเก่าหรือคะ/ครับ?",
						"hindi": "ओपल जैसी चमक... तलवार का पुराना टुकड़ा?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "kemet",
					"content": {
						"korean": "이 조각들이 모든 비극을 기억해. 완벽을 갈망하던 그들의 수치를.",
						"english": "These fragments remember all tragedies. Their shame, yearning for perfection.",
						"japanese": "この破片はすべての悲劇を覚えている。完璧を渇望した彼らの恥を。",
						"chinese": "这些碎片铭记着所有的悲剧。他们渴望完美的耻辱。",
						"french": "Ces fragments se souviennent de toutes les tragédies. Leur honte, aspirant à la perfection.",
						"spanish": "Estos fragmentos recuerdan todas las tragedias. Su vergüenza, anhelando la perfección.",
						"vietnamese": "Những mảnh này ghi nhớ mọi bi kịch. Nỗi hổ thẹn của họ, khao khát sự hoàn hảo.",
						"thai": "ชิ้นส่วนเหล่านี้จดจำโศกนาฏกรรมทั้งหมด ความอับอายของพวกเขาที่ปรารถนาความสมบูรณ์แบบ",
						"hindi": "ये टुकड़े सभी त्रासदियों को याद करते हैं। उनकी शर्म, पूर्णता के लिए तरस रही थी।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "수치… 무슨 뜻이죠?",
						"english": "Shame... what does that mean?",
						"japanese": "恥… どういう意味ですか？",
						"chinese": "耻辱… 这是什么意思？",
						"french": "Honte… qu'est-ce que ça veut dire ?",
						"spanish": "¿Vergüenza… qué significa?",
						"vietnamese": "Hổ thẹn… nghĩa là sao?",
						"thai": "ความอับอาย… หมายความว่าอย่างไรคะ/ครับ?",
						"hindi": "शर्म... इसका क्या मतलब है?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				}
			],
			"win_dialogue": [],
			"lose_dialogue": [],
			"id": 5
		},
		{
			"dialogue": [
				{
					"speaker": "kemet",
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "더 깊이 들어갈수록, 이 사막은 너희를 놓아주지 않을 거야.",
						"english": "The deeper you go, the more this desert will not let you go.",
						"japanese": "深く進めば進むほど、この砂漠はお前たちを解放しないだろう。",
						"chinese": "你们越深入，这片沙漠就越不会放过你们。",
						"french": "Plus vous irez loin, plus ce désert ne vous lâchera pas.",
						"spanish": "Cuanto más os adentréis, este desierto no os dejará ir.",
						"vietnamese": "Các ngươi càng đi sâu, sa mạc này sẽ càng không buông tha các ngươi.",
						"thai": "ยิ่งเข้าไปลึกเท่าไหร่ ทะเลทรายนี้ก็จะไม่ปล่อยพวกเจ้าไป",
						"hindi": "तुम जितना गहरा जाओगे, यह रेगिस्तान तुम्हें जाने नहीं देगा।"
					},
					"speaker": "kemet"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "경고를 무시하고 여기까지 왔어요. 이제와서 멈출 순 없어요.",
						"english": "We ignored the warning and came this far. We can't stop now.",
						"japanese": "警告を無視してここまで来ました。今さら止まることはできません。",
						"chinese": "我们无视警告，走到了这里。现在不能停下来。",
						"french": "Nous avons ignoré l'avertissement et sommes venus jusqu'ici. Nous ne pouvons plus nous arrêter maintenant.",
						"spanish": "Ignoramos la advertencia y llegamos hasta aquí. No podemos detenernos ahora.",
						"vietnamese": "Chúng tôi đã bỏ qua lời cảnh báo và đến tận đây. Giờ thì không thể dừng lại được.",
						"thai": "เราไม่สนใจคำเตือนและมาถึงที่นี่แล้ว ตอนนี้จะหยุดไม่ได้",
						"hindi": "हमने चेतावनी को नज़रअंदाज़ किया और यहाँ तक आ गए। अब हम रुक नहीं सकते।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "과거의 불완전한 존재들이 완벽을 갈망하며 끝없이 되살아나고 있어.",
						"english": "Imperfect beings of the past are endlessly resurrecting, yearning for perfection.",
						"japanese": "過去の不完全な存在たちが、完璧を渇望し、際限なく蘇っている。",
						"chinese": "过去不完美的生灵，渴望完美，无休止地复活着。",
						"french": "Des êtres imparfaits du passé ressuscitent sans fin, aspirant à la perfection.",
						"spanish": "Seres imperfectos del pasado están resucitando sin cesar, anhelando la perfección.",
						"vietnamese": "Những sinh vật không hoàn hảo từ quá khứ đang không ngừng hồi sinh, khao khát sự hoàn hảo.",
						"thai": "สิ่งมีชีวิตที่ไม่สมบูรณ์จากอดีตกำลังฟื้นคืนชีพไม่รู้จบ ปรารถนาความสมบูรณ์แบบ",
						"hindi": "अतीत के अपूर्ण प्राणी पूर्णता की लालसा में अंतहीन रूप से पुनर्जीवित हो रहे हैं।"
					},
					"speaker": "kemet"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "그럼… 저희도 그들의 먹이가 되는 건가요?",
						"english": "Then... are we to become their prey as well?",
						"japanese": "なら… 私たちも彼らの餌になるのですか？",
						"chinese": "那么… 我们也会成为他们的猎物吗？",
						"french": "Alors… allons-nous aussi devenir leur proie ?",
						"spanish": "Entonces… ¿también nos convertiremos en su presa?",
						"vietnamese": "Vậy thì… chúng tôi cũng sẽ trở thành con mồi của chúng sao?",
						"thai": "ถ้าอย่างนั้น… เราก็จะกลายเป็นเหยื่อของพวกเขาด้วยหรือ?",
						"hindi": "तो… क्या हम भी उनके शिकार बन जाएँगे?"
					},
					"speaker": "character_any"
				}
			],
			"win_dialogue": [],
			"lose_dialogue": [],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "크큭… 이 정도로는 끝나지 않아. 이 사막은 영원히 반복될 것이다.",
						"english": "Heh heh... This won't end here. This desert will repeat forever.",
						"japanese": "ククク… これだけでは終わらない。この砂漠は永遠に繰り返されるだろう。",
						"chinese": "呵呵……这不会就此结束。这片沙漠将永远重复。",
						"french": "Hé hé... Ça ne finira pas ici. Ce désert se répétera éternellement.",
						"spanish": "Je je... Esto no terminará aquí. Este desierto se repetirá para siempre.",
						"vietnamese": "He he... Chuyện này sẽ không kết thúc ở đây đâu. Sa mạc này sẽ lặp lại mãi mãi.",
						"thai": "ฮิฮิ... แค่นี้ยังไม่จบหรอก. ทะเลทรายนี้จะวนเวียนไปตลอดกาล",
						"hindi": "हँ हँ... यह यहीं खत्म नहीं होगा। यह रेगिस्तान हमेशा दोहराया जाएगा।"
					}
				},
				{
					"speaker": "kemet",
					"action": "enter",
					"type": "direction",
					"spot": [
						4,
						3
					],
					"duration_ms": 500
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "쓰러뜨렸지만… 이 비극은 끝나지 않았어. 더 깊은 곳에 원인이 있어.",
						"english": "We defeated it... but this tragedy isn't over. The cause lies deeper.",
						"japanese": "倒したが… この悲劇は終わっていない。もっと深いところに原因がある。",
						"chinese": "虽然击败了它……但这场悲剧并未结束。根源在于更深处。",
						"french": "Nous l'avons vaincu... mais cette tragédie n'est pas finie. La cause est plus profonde.",
						"spanish": "Lo derrotamos... pero esta tragedia no ha terminado. La causa reside en lo más profundo.",
						"vietnamese": "Đã đánh bại nó... nhưng bi kịch này chưa kết thúc. Nguyên nhân nằm sâu hơn nữa.",
						"thai": "เอาชนะได้แล้ว... แต่โศกนาฏกรรมนี้ยังไม่จบ. ต้นเหตุอยู่ที่ลึกกว่านั้น",
						"hindi": "हमने उसे हरा दिया... लेकिन यह त्रासदी खत्म नहीं हुई है। इसका कारण और गहरा है।"
					},
					"speaker": "kemet"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "아직… 끝이 아니라고요?",
						"english": "It's... not over yet?",
						"japanese": "まだ… 終わりじゃないんですか？",
						"chinese": "还……没结束吗？",
						"french": "Ce n'est... pas encore fini ?",
						"spanish": "¿Todavía... no ha terminado?",
						"vietnamese": "Vẫn... chưa kết thúc sao?",
						"thai": "ยัง... ไม่จบอีกหรือ?",
						"hindi": "अभी... खत्म नहीं हुआ है?"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "정체 모를 존재는 사라졌지만, 사막의 심장에서 또 다른 불길한 울림이 들려왔다. 끝나지 않는 고통의 시작이었다.",
						"english": "The unknown entity vanished, but another ominous echo resonated from the desert's heart. It was the beginning of unending suffering.",
						"japanese": "正体不明の存在は消えたが、砂漠の心臓から別の不吉な響きが聞こえてきた。それは終わりのない苦痛の始まりだった。",
						"chinese": "未知的存在消失了，但沙漠之心传来了另一个不祥的回响。那是无尽痛苦的开始。",
						"french": "L'entité inconnue a disparu, mais un autre écho sinistre a résonné du cœur du désert. C'était le début d'une souffrance sans fin.",
						"spanish": "La entidad desconocida desapareció, pero otro eco siniestro resonó desde el corazón del desierto. Fue el comienzo de un sufrimiento sin fin.",
						"vietnamese": "Thực thể không rõ đã biến mất, nhưng một âm vang đáng ngại khác lại vang lên từ trái tim sa mạc. Đó là khởi đầu của nỗi đau không hồi kết.",
						"thai": "สิ่งมีชีวิตปริศนาหายไปแล้ว, แต่เสียงสะท้อนอันน่าหวาดหวั่นอีกครั้งดังขึ้นจากใจกลางทะเลทราย. มันคือจุดเริ่มต้นของความเจ็บปวดที่ไม่มีที่สิ้นสุด",
						"hindi": "अज्ञात सत्ता गायब हो गई, लेकिन रेगिस्तान के दिल से एक और अशुभ गूँज सुनाई दी। यह अंतहीन पीड़ा की शुरुआत थी।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"speaker": "kemet",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "kemet",
					"content": {
						"korean": "이 거대한 존재… 예언이 현실이 되었군.",
						"english": "This colossal being... the prophecy has come true.",
						"japanese": "この巨大な存在… 予言が現実になった。",
						"chinese": "这巨大的存在……预言成真了。",
						"french": "Cette entité colossale... la prophétie est devenue réalité.",
						"spanish": "Esta existencia colosal... la profecía se ha hecho realidad.",
						"vietnamese": "Thực thể khổng lồ này... lời tiên tri đã thành hiện thực.",
						"thai": "สิ่งมีชีวิตมหึมานี้... คำทำนายเป็นจริงแล้ว",
						"hindi": "यह विशालकाय अस्तित्व... भविष्यवाणी सच हो गई है।"
					}
				},
				{
					"content": {
						"korean": "어리석은 생명체들. 이곳의 고통은 너희의 상상을 초월한다.",
						"english": "Foolish mortals. The suffering here transcends your imagination.",
						"japanese": "愚かな生命体め。ここでの苦痛はお前たちの想像を絶する。",
						"chinese": "愚蠢的生灵。这里的痛苦超越了你们的想象。",
						"french": "Créatures insensées. La souffrance ici dépasse votre imagination.",
						"spanish": "Criaturas necias. El sufrimiento aquí trasciende vuestra imaginación.",
						"vietnamese": "Những sinh vật ngu ngốc. Nỗi đau ở đây vượt xa sức tưởng tượng của các ngươi.",
						"thai": "สิ่งมีชีวิตโง่เขลา. ความเจ็บปวดที่นี่เกินจินตนาการของพวกเจ้า",
						"hindi": "मूर्ख प्राणी। यहाँ का दर्द तुम्हारी कल्पना से परे है।"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "네가 이 저주의 근원인가!",
						"english": "Are you the source of this curse!",
						"japanese": "お前がこの呪いの根源なのか！",
						"chinese": "你就是这诅咒的根源吗！",
						"french": "Es-tu la source de cette malédiction !",
						"spanish": "¿Eres tú la fuente de esta maldición?!",
						"vietnamese": "Ngươi là nguồn gốc của lời nguyền này sao!",
						"thai": "เจ้าคือต้นตอของคำสาปนี้หรือ!",
						"hindi": "क्या तुम इस श्राप का स्रोत हो!"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "나는 그저 완벽을 갈망하는 자들의 비명일 뿐… 이제 너희도 나와 함께할 시간이다.",
						"english": "I am merely the screams of those who crave perfection... now it's time for you to join me.",
						"japanese": "私は完璧を渇望する者たちの悲鳴に過ぎない… 今度は貴様たちも私と共にする時だ。",
						"chinese": "我不过是那些渴望完美者的尖叫……现在，你们也该和我一起了。",
						"french": "Je ne suis que les cris de ceux qui aspirent à la perfection... maintenant, il est temps pour vous de me rejoindre.",
						"spanish": "Solo soy los gritos de aquellos que anhelan la perfección... ahora es hora de que os unáis a mí.",
						"vietnamese": "Ta chỉ là tiếng kêu thét của những kẻ khao khát sự hoàn hảo... giờ là lúc các ngươi cũng phải tham gia cùng ta.",
						"thai": "ข้าเป็นเพียงเสียงกรีดร้องของผู้ที่ปรารถนาความสมบูรณ์แบบ... ถึงเวลาที่พวกเจ้าจะต้องร่วมกับข้าแล้ว",
						"hindi": "मैं तो बस उन लोगों की चीख हूँ जो पूर्णता की लालसा रखते हैं... अब तुम्हारा भी मेरे साथ जुड़ने का समय है।"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "거대한 그림자가 모든 것을 집어삼켰다.",
						"english": "A colossal shadow devoured everything.",
						"japanese": "巨大な影がすべてを飲み込んだ。",
						"chinese": "巨大的阴影吞噬了一切。",
						"french": "Une ombre colossale a tout dévoré.",
						"spanish": "Una sombra colosal devoró todo.",
						"vietnamese": "Một bóng tối khổng lồ đã nuốt chửng mọi thứ.",
						"thai": "เงาขนาดมหึมากลืนกินทุกสิ่ง",
						"hindi": "एक विशालकाय छाया ने सब कुछ निगल लिया।"
					},
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "하찮은 것들. 너희의 생명 에너지가 나의 재탄생을 위한 제물이 될 것이다.",
						"english": "Insignificant beings. Your life energy will be a sacrifice for my rebirth.",
						"japanese": "取るに足らない者たち。お前たちの生命エネルギーは、私の再誕のための生贄となるだろう。",
						"chinese": "微不足道的存在。你们的生命能量将成为我重生的祭品。",
						"french": "Êtres insignifiants. Votre énergie vitale sera un sacrifice pour ma renaissance.",
						"spanish": "Seres insignificantes. Vuestra energía vital será un sacrificio para mi renacimiento.",
						"vietnamese": "Những kẻ tầm thường. Năng lượng sống của các ngươi sẽ là vật tế cho sự tái sinh của ta.",
						"thai": "พวกไร้ค่า. พลังชีวิตของพวกเจ้าจะเป็นเครื่องสังเวยเพื่อการเกิดใหม่ของข้า",
						"hindi": "तुच्छ प्राणी। तुम्हारी जीवन ऊर्जा मेरे पुनर्जन्म के लिए बलि होगी।"
					},
					"speaker": "random_boss"
				},
				{
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"action": "enter",
					"type": "direction",
					"speaker": "kemet"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "포기하지 마! 이 불완전한 순환을 끊어야 해!",
						"english": "Don't give up! You must break this incomplete cycle!",
						"japanese": "諦めるな！この不完全な循環を断ち切らなければならない！",
						"chinese": "不要放弃！你必须打破这个不完整的循环！",
						"french": "N'abandonne pas ! Tu dois briser ce cycle incomplet !",
						"spanish": "¡No te rindas! ¡Debes romper este ciclo incompleto!",
						"vietnamese": "Đừng bỏ cuộc! Ngươi phải phá vỡ vòng lặp không hoàn chỉnh này!",
						"thai": "อย่ายอมแพ้! คุณต้องทำลายวงจรที่ไม่สมบูรณ์นี้!",
						"hindi": "हार मत मानो! तुम्हें इस अधूरे चक्र को तोड़ना होगा!"
					},
					"speaker": "kemet"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "젠장… 다시 일어설 거야!",
						"english": "Damn it... I'll rise again!",
						"japanese": "ちくしょう… また立ち上がるぞ！",
						"chinese": "该死…… 我会再次站起来的！",
						"french": "Zut... Je me relèverai !",
						"spanish": "¡Maldita sea... Me levantaré de nuevo!",
						"vietnamese": "Chết tiệt… Ta sẽ đứng dậy lần nữa!",
						"thai": "ให้ตายสิ... ฉันจะลุกขึ้นสู้อีกครั้ง!",
						"hindi": "धिक्कार है... मैं फिर उठूंगा!"
					},
					"type": "speech",
					"emotion": "angry"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"끝없이 펼쳐진 붉은 모래 사막.",
			"고대 블레이드마스터 문명의 유해가 잠든 곳.",
			"예언자 케메트는 불길한 전조와 함께 탐험대를 이끌었다.",
			"이곳은… 저주받은 땅이었다."
		],
		"english": [
			"Vast, endless red sand desert.",
			"Where the remains of the ancient Blademaster civilization lie dormant.",
			"Prophet Khemet led the expedition, accompanied by ominous omens.",
			"This place... was a cursed land."
		],
		"japanese": [
			"果てしなく広がる赤い砂漠。",
			"古代ブレードマスター文明の遺跡が眠る場所。",
			"預言者ケメトは不吉な予兆と共に探検隊を率いた。",
			"この地は…呪われた土地だった。"
		],
		"chinese": [
			"一望无际的红色沙漠。",
			"古老剑术大师文明遗骸沉睡之地。",
			"先知凯米特带着不祥的预兆，率领探险队。",
			"这里……是片被诅咒的土地。"
		],
		"french": [
			"Un désert de sable rouge, s'étendant à l'infini.",
			"Là où reposent les vestiges de l'ancienne civilisation des Maîtres-Lames.",
			"Le prophète Khemet mena l'expédition, accompagné de sinistres présages.",
			"Cet endroit... était une terre maudite."
		],
		"spanish": [
			"Un desierto de arena roja que se extiende sin fin.",
			"Donde yacen los restos de la antigua civilización Maestra de la Espada.",
			"El profeta Khemet lideró la expedición, acompañado de presagios siniestros.",
			"Este lugar... era una tierra maldita."
		],
		"vietnamese": [
			"Sa mạc cát đỏ trải dài vô tận.",
			"Nơi di hài của nền văn minh Kiếm Sư cổ đại đang ngủ yên.",
			"Tiên tri Khemet dẫn đầu đoàn thám hiểm, mang theo những điềm báo gở.",
			"Nơi đây... là một vùng đất bị nguyền rủa."
		],
		"thai": [
			"ทะเลทรายทรายสีแดงกว้างใหญ่ไร้ที่สิ้นสุด",
			"ที่ซึ่งซากอารยธรรมดาบมาสเตอร์โบราณหลับใหลอยู่",
			"ผู้เผยพระวจนะเคเมตนำคณะสำรวจ พร้อมกับลางร้าย",
			"ที่นี่...เป็นดินแดนที่ถูกสาป"
		],
		"hindi": [
			"अंतहीन फैला लाल रेत का रेगिस्तान。",
			"प्राचीन ब्लेडमास्टर सभ्यता के अवशेष जहाँ निष्क्रिय पड़े हैं।",
			"पैगंबर खेमेट ने अशुभ संकेतों के साथ अभियान का नेतृत्व किया।",
			"यह जगह... एक शापित भूमि थी।"
		]
	}
} as const;
