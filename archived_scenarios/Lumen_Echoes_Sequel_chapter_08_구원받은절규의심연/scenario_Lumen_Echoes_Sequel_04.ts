export const scenario_Lumen_Echoes_Sequel_04 = {
	"scenario_id": "Lumen_Echoes_Sequel_04",
	"order": 4,
	"act": "rising",
	"theme": "hell",
	"actors": {
		"brim": {
			"id": "mon_d7f57824-190d-40b9-93d1-66c658f0441f",
			"name": {
				"korean": "브림",
				"english": "Brim",
				"japanese": "ブリム",
				"chinese": "布里姆",
				"french": "Brim",
				"spanish": "Brim",
				"vietnamese": "Brim",
				"thai": "บริม",
				"hindi": "ब्रिम"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/08ad0e4d-214d-43b3-dc3e-ddfba9049300/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/16f1def2-7c33-4558-4b21-9c3e87fa3e00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"content": {
						"korean": "세계는 고요했다. 모든 감정이 억압된 채, 산 자들은 유령처럼 떠돌았다.",
						"english": "The world was silent. All emotions suppressed, the living wandered like ghosts.",
						"japanese": "世界は静かだった。すべての感情が抑圧され、生者は幽霊のようにさまよっていた。",
						"chinese": "世界一片寂静。所有情感被压抑，生者如鬼魂般游荡。",
						"french": "Le monde était silencieux. Toutes les émotions supprimées, les vivants erraient comme des fantômes.",
						"spanish": "El mundo estaba en silencio. Todas las emociones reprimidas, los vivos vagaban como fantasmas.",
						"vietnamese": "Thế giới im lặng. Mọi cảm xúc bị kìm nén, người sống lang thang như những bóng ma.",
						"thai": "โลกเงียบงัน อารมณ์ทั้งหมดถูกกดขี่ คนเป็นล่องลอยราวกับวิญญาณ",
						"hindi": "दुनिया शांत थी। सभी भावनाएँ दबी हुई थीं, जीवित लोग भूतों की तरह भटक रहे थे।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "이 평화가… 진짜라고?",
						"english": "This peace... is it real?",
						"japanese": "この平和が…本当だと？",
						"chinese": "这份平静……是真的吗？",
						"french": "Cette paix... est-elle réelle ?",
						"spanish": "Esta paz... ¿es real?",
						"vietnamese": "Sự bình yên này... là thật sao?",
						"thai": "ความสงบนี้... เป็นเรื่องจริงหรือ?",
						"hindi": "यह शांति... क्या यह सच है?"
					}
				},
				{
					"spot": [
						4,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "brim"
				},
				{
					"emotion": "base",
					"speaker": "brim",
					"type": "speech",
					"content": {
						"korean": "진짜는 숨겨진 법. 억압된 감정은 사라지지 않아. 그저 무기가 될 뿐이지.",
						"english": "Truth is often hidden. Suppressed emotions don't disappear; they merely become weapons.",
						"japanese": "真実は隠されるもの。抑圧された感情は消えず、ただ武器となるだけだ。",
						"chinese": "真实往往被隐藏。被压抑的情感并不会消失，它们只会变成武器。",
						"french": "La vérité est souvent cachée. Les émotions refoulées ne disparaissent pas ; elles ne deviennent que des armes.",
						"spanish": "La verdad a menudo está oculta. Las emociones reprimidas no desaparecen; simplemente se convierten en armas.",
						"vietnamese": "Sự thật thường bị che giấu. Cảm xúc bị kìm nén không biến mất; chúng chỉ trở thành vũ khí.",
						"thai": "ความจริงมักถูกซ่อนเร้น อารมณ์ที่ถูกกดขี่ไม่หายไป; พวกมันแค่กลายเป็นอาวุธ",
						"hindi": "सच अक्सर छिपा होता है। दमित भावनाएँ गायब नहीं होतीं; वे केवल हथियार बन जाती हैं।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "무기라고?",
						"english": "Weapons?",
						"japanese": "武器だと？",
						"chinese": "武器？",
						"french": "Des armes ?",
						"spanish": "¿Armas?",
						"vietnamese": "Vũ khí sao?",
						"thai": "อาวุธ?",
						"hindi": "हथियार?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그래. 네 안의 고통, 분노. 그거 전부 힘이 될 수 있어.",
						"english": "Yes. The pain, the rage within you. All of it can become power.",
						"japanese": "ああ。お前の中の苦痛、怒り。それらすべてが力になり得る。",
						"chinese": "是的。你内心的痛苦、愤怒。这一切都能成为力量。",
						"french": "Oui. La douleur, la rage en toi. Tout cela peut devenir une force.",
						"spanish": "Sí. El dolor, la rabia dentro de ti. Todo eso puede convertirse en poder.",
						"vietnamese": "Đúng vậy. Nỗi đau, sự phẫn nộ trong bạn. Tất cả đều có thể trở thành sức mạnh.",
						"thai": "ใช่ ความเจ็บปวด ความโกรธในตัวเจ้า ทั้งหมดนั้นสามารถกลายเป็นพลังได้",
						"hindi": "हाँ। तुम्हारे अंदर का दर्द, गुस्सा। वह सब ताकत बन सकता है।"
					},
					"emotion": "base",
					"speaker": "brim"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "brim"
				},
				{
					"emotion": "base",
					"speaker": "brim",
					"type": "speech",
					"content": {
						"korean": "이 '구원받은' 세상에서, 감정은 약점이야. 하지만 뒤집을 수도 있어.",
						"english": "In this 'redeemed' world, emotions are a weakness. But that can be turned around.",
						"japanese": "この「救済された」世界では、感情は弱点だ。だが、それを覆すこともできる。",
						"chinese": "在这个“被救赎”的世界里，情感是弱点。但它也可以被扭转。",
						"french": "Dans ce monde 'racheté', les émotions sont une faiblesse. Mais cela peut être inversé.",
						"spanish": "En este mundo 'redimido', las emociones son una debilidad. Pero eso se puede revertir.",
						"vietnamese": "Trong thế giới 'được cứu rỗi' này, cảm xúc là một điểm yếu. Nhưng điều đó có thể thay đổi.",
						"thai": "ในโลกที่ 'ได้รับการไถ่บาป' นี้ อารมณ์คือจุดอ่อน แต่มันสามารถพลิกผันได้",
						"hindi": "इस 'मुक्त' दुनिया में, भावनाएँ एक कमजोरी हैं। लेकिन इसे बदला जा सकता है।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "억지로 눌러왔던 감정을… 어떻게 무기로 만들어?",
						"english": "How do I turn suppressed emotions... into a weapon?",
						"japanese": "抑え込んできた感情を…どうやって武器にするんだ？",
						"chinese": "强行压抑的情感…要如何才能化为武器？",
						"french": "Comment transformer les émotions refoulées… en une arme ?",
						"spanish": "¿Cómo convierto las emociones reprimidas... en un arma?",
						"vietnamese": "Làm sao để biến những cảm xúc bị kìm nén… thành vũ khí?",
						"thai": "ฉันจะเปลี่ยนอารมณ์ที่ถูกกดขี่…ให้เป็นอาวุธได้อย่างไร?",
						"hindi": "दबी हुई भावनाओं को… मैं हथियार में कैसे बदलूँ?"
					}
				},
				{
					"emotion": "base",
					"speaker": "brim",
					"content": {
						"korean": "부숴버려야 해. 영혼의 틀을 깨뜨려야만, 진정한 힘을 얻을 수 있어.",
						"english": "You must break them. Only by shattering the soul's mold can you gain true power.",
						"japanese": "打ち破らねば。魂の鋳型を打ち砕いてこそ、真の力を得られる。",
						"chinese": "必须将其摧毁。唯有打破灵魂的束缚，方能获得真正的力量。",
						"french": "Tu dois les briser. Ce n'est qu'en brisant le moule de l'âme que tu pourras obtenir un vrai pouvoir.",
						"spanish": "Debes destrozarlos. Solo rompiendo el molde del alma podrás obtener el verdadero poder.",
						"vietnamese": "Ngươi phải phá vỡ chúng. Chỉ khi đập tan khuôn mẫu của linh hồn, ngươi mới có thể đạt được sức mạnh thực sự.",
						"thai": "เจ้าต้องทำลายมันทิ้งไป. เพียงแค่ทลายกรอบของวิญญาณ เจ้าถึงจะได้รับพลังที่แท้จริง.",
						"hindi": "तुम्हें उन्हें तोड़ना होगा। आत्मा के साँचे को तोड़कर ही तुम सच्ची शक्ति प्राप्त कर सकते हो।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "그 대가는 뭔데?",
						"english": "What's the price?",
						"japanese": "その代償は？",
						"chinese": "代价是什么？",
						"french": "Quel en est le prix ?",
						"spanish": "¿Cuál es el precio?",
						"vietnamese": "Cái giá phải trả là gì?",
						"thai": "แล้วค่าตอบแทนล่ะ?",
						"hindi": "उसकी कीमत क्या है?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "글쎄… 네 영혼은 좀먹을 수도 있겠지.",
						"english": "Well... it might gnaw at your soul.",
						"japanese": "さあ…お前の魂を蝕むかもな。",
						"chinese": "嗯…也许会侵蚀你的灵魂。",
						"french": "Eh bien… ça pourrait ronger ton âme.",
						"spanish": "Bueno... podría carcomer tu alma.",
						"vietnamese": "Chà… có thể nó sẽ gặm nhấm linh hồn ngươi.",
						"thai": "ก็… มันอาจจะกัดกินวิญญาณของเจ้าก็ได้นะ.",
						"hindi": "ख़ैर… यह तुम्हारी आत्मा को खोखला कर सकता है।"
					},
					"emotion": "base",
					"speaker": "brim"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "brim",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "이봐. 네가 보고 있는 게 다가 아니야.",
						"english": "Hey. What you're seeing isn't everything.",
						"japanese": "おい。お前が見ているものが全てじゃないぞ。",
						"chinese": "嘿。你所看到的并非全部。",
						"french": "Hé. Ce que tu vois n'est pas tout.",
						"spanish": "Oye. Lo que ves no es todo.",
						"vietnamese": "Này. Cái mà ngươi đang thấy không phải là tất cả đâu.",
						"thai": "เฮ้. สิ่งที่เจ้าเห็นไม่ใช่ทั้งหมดนะ.",
						"hindi": "सुनो। जो तुम देख रहे हो, वह सब कुछ नहीं है।"
					},
					"emotion": "base",
					"speaker": "brim"
				},
				{
					"type": "speech",
					"content": {
						"korean": "무슨 소리야?",
						"english": "What do you mean?",
						"japanese": "どういうことだ？",
						"chinese": "你什么意思？",
						"french": "Que veux-tu dire ?",
						"spanish": "¿Qué quieres decir?",
						"vietnamese": "Ngươi nói gì vậy?",
						"thai": "หมายความว่าไง?",
						"hindi": "तुम्हारा क्या मतलब है?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "brim",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "여기저기 떠도는 작은 그림자들… 그게 뭔지 알아?",
						"english": "Those little shadows drifting everywhere... Do you know what they are?",
						"japanese": "あちこちに漂う小さな影たち…それが何だか分かるか？",
						"chinese": "四处飘荡的小影子…你知道那是什么吗？",
						"french": "Ces petites ombres qui flottent partout… Sais-tu ce que c'est ?",
						"spanish": "Esas pequeñas sombras que flotan por todas partes... ¿Sabes qué son?",
						"vietnamese": "Những cái bóng nhỏ lảng vảng khắp nơi… Ngươi có biết chúng là gì không?",
						"thai": "เงาเล็กๆ ที่ล่องลอยอยู่ทั่วทุกที่… เจ้ารู้ไหมว่ามันคืออะไร?",
						"hindi": "हर जगह तैरती हुई वो छोटी परछाइयाँ… क्या तुम जानते हो वे क्या हैं?"
					}
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "보이지 않는 무언가가 '구원받은' 자들 사이를 떠돌며 희미한 생기를 흡수했다.",
						"english": "Something unseen drifted among the 'redeemed' and absorbed their faint vitality.",
						"japanese": "見えざる何かが「救われた」者たちの間を漂い、かすかな生気を吸収した。",
						"chinese": "某种看不见的东西在“被救赎者”之间游荡，吸收着微弱的生机。",
						"french": "Quelque chose d'invisible a erré parmi les « rachetés » et a absorbé leur faible vitalité.",
						"spanish": "Algo invisible deambuló entre los 'redimidos' y absorbió su tenue vitalidad.",
						"vietnamese": "Một thứ vô hình nào đó đã lảng vảng giữa những kẻ 'được cứu rỗi' và hấp thụ sinh khí yếu ớt của họ.",
						"thai": "บางสิ่งที่มองไม่เห็นล่องลอยอยู่ท่ามกลางผู้ 'ได้รับการไถ่บาป' และดูดซับพลังชีวิตที่เลือนลางของพวกเขา.",
						"hindi": "कोई अदृश्य चीज़ 'मुक्ति' पाए लोगों के बीच घूम रही थी और उनकी कमज़ोर जीवन शक्ति को सोख रही थी।"
					}
				},
				{
					"content": {
						"korean": "억압된 감정은 에너지가 돼. 그리고 그걸 노리는 것들도 있지.",
						"english": "Suppressed emotions become energy. And there are those who prey on it.",
						"japanese": "抑圧された感情はエネルギーになる。そしてそれを狙う者たちもいる。",
						"chinese": "被压抑的情感会转化为能量。而有些东西正觊觎着它。",
						"french": "Les émotions refoulées deviennent de l'énergie. Et il y a ceux qui la convoitent.",
						"spanish": "Las emociones reprimidas se convierten en energía. Y hay quienes se aprovechan de ello.",
						"vietnamese": "Cảm xúc bị kìm nén sẽ trở thành năng lượng. Và cũng có những kẻ đang thèm khát nó.",
						"thai": "อารมณ์ที่ถูกกดขี่จะกลายเป็นพลังงาน. และก็มีบางอย่างที่จ้องจะใช้ประโยชน์จากมัน.",
						"hindi": "दबी हुई भावनाएँ ऊर्जा बन जाती हैं। और कुछ ऐसे भी हैं जो इस पर नज़र रखते हैं।"
					},
					"type": "speech",
					"speaker": "brim",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "너도 그 감정을 이용하는 거잖아!",
						"english": "You're using those emotions too!",
						"japanese": "お前もその感情を利用しているじゃないか！",
						"chinese": "你不也在利用这些情感吗！",
						"french": "Toi aussi, tu utilises ces émotions !",
						"spanish": "¡Tú también estás usando esas emociones!",
						"vietnamese": "Ngươi cũng đang lợi dụng những cảm xúc đó mà!",
						"thai": "แกก็กำลังใช้อารมณ์พวกนั้นเหมือนกันนี่!",
						"hindi": "तुम भी तो उन भावनाओं का इस्तेमाल कर रहे हो!"
					},
					"type": "speech"
				},
				{
					"speaker": "brim",
					"emotion": "base",
					"content": {
						"korean": "난 통제해. 그게 너랑 다른 점이야.",
						"english": "I control. That's where you and I differ.",
						"japanese": "私は制御する。それがお前と違う点だ。",
						"chinese": "我掌控一切。那就是你和我的不同。",
						"french": "Je contrôle. C'est la différence entre toi et moi.",
						"spanish": "Yo controlo. Esa es la diferencia entre tú y yo.",
						"vietnamese": "Ta kiểm soát. Đó là điểm khác biệt giữa ngươi và ta.",
						"thai": "ฉันควบคุม นั่นคือสิ่งที่ฉันต่างจากนาย",
						"hindi": "मैं नियंत्रित करता हूँ। यही फर्क है मुझमें और तुममें।"
					},
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"speaker": "brim",
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "점점… 숨쉬기 힘들어.",
						"english": "It's getting... harder to breathe.",
						"japanese": "だんだん… 息が苦しい。",
						"chinese": "渐渐地… 呼吸变得困难了。",
						"french": "De plus en plus... difficile de respirer.",
						"spanish": "Cada vez... más difícil respirar.",
						"vietnamese": "Càng ngày… càng khó thở.",
						"thai": "ค่อยๆ… หายใจลำบากขึ้นเรื่อยๆ",
						"hindi": "धीरे-धीरे... साँस लेना मुश्किल हो रहा है।"
					},
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"speaker": "brim",
					"content": {
						"korean": "느껴져? 이 억압된 슬픔, 분노… 곧 폭발할 거야.",
						"english": "Can you feel it? This suppressed sorrow, rage... it will explode soon.",
						"japanese": "感じるか？この抑圧された悲しみ、怒り…もうすぐ爆発するだろう。",
						"chinese": "感觉到了吗？这被压抑的悲伤、愤怒…很快就会爆发。",
						"french": "Tu le sens ? Cette tristesse, cette colère refoulées... Elles vont bientôt exploser.",
						"spanish": "¿Lo sientes? Esta tristeza, esta rabia reprimidas... Pronto explotarán.",
						"vietnamese": "Ngươi có cảm nhận được không? Nỗi buồn, sự phẫn nộ bị kìm nén này… sẽ sớm bùng nổ thôi.",
						"thai": "รู้สึกไหม? ความเศร้าโศก ความโกรธที่ถูกกดขี่นี้… กำลังจะระเบิดแล้ว",
						"hindi": "महसूस हो रहा है? यह दबी हुई उदासी, गुस्सा... जल्द ही फूट पड़ेगा।"
					},
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "네 방법이 맞는 거야? 우리가 더 큰 혼란을 일으키는 건 아닐까?",
						"english": "Is your way right? Are we just causing greater chaos?",
						"japanese": "お前のやり方は正しいのか？我々はもっと大きな混乱を引き起こしているだけではないか？",
						"chinese": "你的方法是对的吗？我们是不是在制造更大的混乱？",
						"french": "Ta méthode est-elle la bonne ? Ne sommes-nous pas en train de créer un chaos plus grand ?",
						"spanish": "¿Es tu método el correcto? ¿No estaremos causando un caos mayor?",
						"vietnamese": "Cách của ngươi có đúng không? Chẳng lẽ chúng ta đang gây ra hỗn loạn lớn hơn ư?",
						"thai": "วิธีของนายถูกต้องแล้วเหรอ? เราไม่ได้กำลังสร้างความวุ่นวายที่ใหญ่กว่าอยู่ใช่ไหม?",
						"hindi": "क्या तुम्हारा तरीका सही है? कहीं हम और बड़ी अराजकता तो नहीं फैला रहे?"
					}
				},
				{
					"content": {
						"korean": "이미 늦었어. 이제 돌이킬 수 없어. 선택해. 삼켜지거나, 삼키거나.",
						"english": "It's too late. There's no turning back. Choose. Be swallowed, or swallow.",
						"japanese": "もう遅い。もう引き返せない。選べ。飲み込まれるか、飲み込むか。",
						"chinese": "已经太迟了。无法回头。选择吧。被吞噬，或吞噬。",
						"french": "Il est trop tard. On ne peut plus revenir en arrière. Choisis. Sois avalé, ou avale.",
						"spanish": "Es demasiado tarde. No hay vuelta atrás. Elige. Sé devorado, o devora.",
						"vietnamese": "Đã quá muộn rồi. Không thể quay lại được nữa. Chọn đi. Bị nuốt chửng, hoặc nuốt chửng.",
						"thai": "สายเกินไปแล้ว ไม่มีทางย้อนกลับได้ เลือกซะ จะถูกกลืนกิน หรือจะกลืนกิน",
						"hindi": "बहुत देर हो चुकी है। अब पीछे नहीं हट सकते। चुनो। निगल जाओ, या निगले जाओ।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "brim"
				},
				{
					"content": {
						"korean": "….",
						"english": "...",
						"japanese": "「…」",
						"chinese": "...",
						"french": "...",
						"spanish": "...",
						"vietnamese": "...",
						"thai": "...",
						"hindi": "..."
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"speaker": "brim",
					"type": "speech",
					"content": {
						"korean": "저 앞에, 네 감정을 시험할 녀석이 기다리고 있어.",
						"english": "Ahead, something awaits to test your emotions.",
						"japanese": "あの先に、お前の感情を試す奴が待っている。",
						"chinese": "前方，有东西在等着考验你的情感。",
						"french": "Devant, quelqu'un t'attend pour tester tes émotions.",
						"spanish": "Adelante, algo te espera para poner a prueba tus emociones.",
						"vietnamese": "Phía trước, có kẻ đang chờ để thử thách cảm xúc của ngươi.",
						"thai": "ข้างหน้า มีบางสิ่งรอคอยที่จะทดสอบอารมณ์ของนายอยู่",
						"hindi": "आगे, कोई तुम्हारी भावनाओं को परखने के लिए इंतजार कर रहा है।"
					}
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"emotion": "sad",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "하… 끝나지 않아. 네가 감정을 이용하는 한, {random_boss}는 영원히 다시 태어날 것이다.",
						"english": "Hah... It's not over. As long as you use emotions, {random_boss} will be reborn forever.",
						"japanese": "はぁ… 終わらない。お前が感情を使う限り、{random_boss}は永遠に生まれ変わるだろう。",
						"chinese": "哈……还没结束。只要你利用情感，{random_boss}就会永远重生。",
						"french": "Ha... Ce n'est pas fini. Tant que tu te serviras de tes émotions, {random_boss} renaîtra éternellement.",
						"spanish": "Ja... No ha terminado. Mientras uses tus emociones, {random_boss} renacerá para siempre.",
						"vietnamese": "Ha... Vẫn chưa kết thúc. Chừng nào ngươi còn lợi dụng cảm xúc, {random_boss} sẽ mãi mãi tái sinh.",
						"thai": "ฮ่า... ยังไม่จบ ตราบใดที่เจ้ายังใช้ความรู้สึก {random_boss} ก็จะกลับมาเกิดใหม่ตลอดไป",
						"hindi": "हा... यह खत्म नहीं हुआ है। जब तक तुम भावनाओं का उपयोग करोगे, {random_boss} हमेशा के लिए फिर से पैदा होगा।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "무슨 소리야.",
						"english": "What do you mean?",
						"japanese": "どういうことだ。",
						"chinese": "什么意思？",
						"french": "Que veux-tu dire ?",
						"spanish": "¿Qué quieres decir?",
						"vietnamese": "Ý ngươi là sao?",
						"thai": "หมายความว่าอะไร?",
						"hindi": "तुम्हारा क्या मतलब है?"
					}
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이것은 시작일 뿐… 억압된 고통은… 더 큰 존재를 부를 뿐이지.",
						"english": "This is just the beginning... Suppressed pain... only summons a greater entity.",
						"japanese": "これは始まりに過ぎない… 抑圧された苦痛は… より大きな存在を呼び出すだけだ。",
						"chinese": "这只是开始……被压抑的痛苦……只会召唤出更强大的存在。",
						"french": "Ce n'est que le début... La douleur refoulée... ne fait qu'appeler une entité plus grande.",
						"spanish": "Esto es solo el principio... El dolor reprimido... solo invocará a una entidad mayor.",
						"vietnamese": "Đây chỉ là khởi đầu... Nỗi đau bị kìm nén... chỉ triệu hồi một thực thể lớn hơn mà thôi.",
						"thai": "นี่เป็นเพียงจุดเริ่มต้น... ความเจ็บปวดที่ถูกกดขี่... จะเรียกขานสิ่งที่มีอยู่เหนือกว่าเท่านั้น",
						"hindi": "यह सिर्फ शुरुआत है... दमित दर्द... केवल एक बड़ी इकाई को बुलाएगा।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "그림자가 사라지자, 어둠은 더욱 깊어졌다. 브림의 경고가 머릿속을 맴돌았다.",
						"english": "As the shadow vanished, the darkness deepened. Brim's warning echoed in my mind.",
						"japanese": "影が消え去ると、闇はさらに深まった。ブリムの警告が頭の中を駆け巡った。",
						"chinese": "随着影子的消失，黑暗变得更加深沉。布里姆的警告在我脑海中回荡。",
						"french": "Alors que l'ombre disparaissait, l'obscurité s'épaississait. L'avertissement de Brim résonnait dans mon esprit.",
						"spanish": "Cuando la sombra se desvaneció, la oscuridad se hizo más profunda. La advertencia de Brim resonaba en mi mente.",
						"vietnamese": "Khi bóng tối tan biến, màn đêm càng trở nên sâu thẳm. Lời cảnh báo của Brim cứ văng vẳng trong đầu tôi.",
						"thai": "เมื่อเงาหายไป ความมืดก็ยิ่งลึกซึ้ง คำเตือนของบริมยังคงก้องอยู่ในใจ",
						"hindi": "जैसे ही छाया गायब हुई, अंधेरा और गहरा हो गया। ब्रिम की चेतावनी मेरे दिमाग में गूंज रही थी।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"action": "enter",
					"speaker": "brim",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						2,
						3
					]
				},
				{
					"content": {
						"korean": "봐. 내가 경고했잖아. 감정은 양날의 검이야. 네 영혼은 괜찮아?",
						"english": "See? I warned you. Emotions are a double-edged sword. Is your soul alright?",
						"japanese": "見ろ。警告しただろう。感情は諸刃の剣だ。お前の魂は大丈夫か？",
						"chinese": "看。我警告过你。情感是把双刃剑。你的灵魂没事吧？",
						"french": "Vois-tu ? Je t'avais prévenu. Les émotions sont une épée à double tranchant. Ton âme va bien ?",
						"spanish": "Mira. Te lo advertí. Las emociones son un arma de doble filo. ¿Está bien tu alma?",
						"vietnamese": "Thấy chưa? Ta đã cảnh báo ngươi rồi. Cảm xúc là con dao hai lưỡi. Linh hồn ngươi có ổn không?",
						"thai": "เห็นไหม? ฉันเตือนนายแล้ว อารมณ์เป็นดาบสองคม วิญญาณของนายเป็นยังไงบ้าง?",
						"hindi": "देखो। मैंने तुम्हें चेतावनी दी थी। भावनाएं दोधारी तलवार हैं। क्या तुम्हारी आत्मा ठीक है?"
					},
					"type": "speech",
					"speaker": "brim",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "…괜찮아.",
						"english": "...I'm fine.",
						"japanese": "…大丈夫だ。",
						"chinese": "……没事。",
						"french": "...Ça va.",
						"spanish": "...Estoy bien.",
						"vietnamese": "...Tôi ổn.",
						"thai": "...ไม่เป็นไร",
						"hindi": "...मैं ठीक हूँ।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "구원받은 자들의 고요한 표정 속에서, 더 깊은 절규의 파동이 느껴졌다.",
						"english": "Within the calm expressions of the redeemed, waves of deeper despair could be felt.",
						"japanese": "救われし者たちの静かな表情の奥で、より深い絶叫の波動が感じられた。",
						"chinese": "在被救赎者的平静表情中，感受到了更深层绝望的波动。",
						"french": "Sous les expressions sereines des rachetés, on percevait les ondes d'un désespoir plus profond.",
						"spanish": "En las expresiones serenas de los redimidos, se sentían las ondas de una desesperación más profunda.",
						"vietnamese": "Trong những biểu cảm tĩnh lặng của những người được cứu rỗi, một làn sóng tuyệt vọng sâu thẳm hơn đã được cảm nhận.",
						"thai": "ภายในสีหน้าอันสงบนิ่งของผู้ที่ได้รับความรอด คลื่นแห่งความสิ้นหวังที่ลึกซึ้งยิ่งกว่ายังคงสัมผัสได้",
						"hindi": "बचाए गए लोगों के शांत भावों के भीतर, गहरी निराशा की लहरें महसूस की जा सकती थीं।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"dialogue": [
				{
					"action": "enter",
					"speaker": "brim",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						2,
						3
					]
				},
				{
					"emotion": "base",
					"speaker": "brim",
					"type": "speech",
					"content": {
						"korean": "저게… 너희의 감정을 노리는 존재야.",
						"english": "That... is the being that preys on your emotions.",
						"japanese": "あれが…お前たちの感情を狙う存在だ。",
						"chinese": "那就是…觊觎你们情感的存在。",
						"french": "C'est... l'être qui cible vos émotions.",
						"spanish": "Eso... es el ser que acecha vuestras emociones.",
						"vietnamese": "Đó… là kẻ đang nhắm vào cảm xúc của các ngươi.",
						"thai": "นั่นคือ… สิ่งที่จ้องเล่นงานอารมณ์ของพวกนาย",
						"hindi": "वह... तुम्हारी भावनाओं पर वार करने वाला अस्तित्व है।"
					}
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "형체를 알 수 없는 그림자가 거대한 어둠을 드리웠다.",
						"english": "A shapeless shadow cast a colossal darkness.",
						"japanese": "形なき影が巨大な闇を投げかけた。",
						"chinese": "一道无形的影子投下了巨大的黑暗。",
						"french": "Une ombre informe projeta une obscurité colossale.",
						"spanish": "Una sombra sin forma proyectó una oscuridad colosal.",
						"vietnamese": "Một cái bóng không hình dạng phủ một màn đêm khổng lồ.",
						"thai": "เงาไร้รูปร่างทอดทิ้งความมืดมิดมหึมา",
						"hindi": "एक निराकार छाया ने एक विशाल अंधकार फैलाया।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "감정? 흐흐흐… 억압된 것은 언제나 내 먹이가 되지.",
						"english": "Emotions? Hehehe... The suppressed always become my prey.",
						"japanese": "感情？フフフ…抑圧されたものはいつだって俺の獲物だ。",
						"chinese": "情感？呵呵呵…被压抑的，永远是我的猎物。",
						"french": "Les émotions ? Hahaha... Ce qui est refoulé devient toujours ma proie.",
						"spanish": "¿Emociones? Jajaja... Lo reprimido siempre se convierte en mi presa.",
						"vietnamese": "Cảm xúc ư? Hì hì hì… Những thứ bị kìm nén luôn là con mồi của ta.",
						"thai": "อารมณ์เหรอ? ฮิฮิฮิ… สิ่งที่ถูกกดขี่มักจะเป็นเหยื่อของข้าเสมอ",
						"hindi": "भावनाएँ? हँ हँ हँ... दबा हुआ हमेशा मेरा शिकार बनता है।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "우리는 먹이가 아니야.",
						"english": "We are not prey.",
						"japanese": "我々は獲物ではない。",
						"chinese": "我们不是猎物。",
						"french": "Nous ne sommes pas des proies.",
						"spanish": "No somos presas.",
						"vietnamese": "Chúng ta không phải con mồi.",
						"thai": "เราไม่ใช่อาหาร",
						"hindi": "हम शिकार नहीं हैं।"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"speaker": "brim",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "조심해. 저 녀석은 네 안의 약점을 파고들 거야.",
						"english": "Be careful. It will exploit your weaknesses.",
						"japanese": "気をつけろ。奴はお前の弱点に付け込むだろう。",
						"chinese": "小心。它会利用你内心的弱点。",
						"french": "Fais attention. Il exploitera tes faiblesses.",
						"spanish": "Ten cuidado. Se aprovechará de tus debilidades.",
						"vietnamese": "Cẩn thận. Nó sẽ khoét sâu vào điểm yếu của ngươi.",
						"thai": "ระวังให้ดี มันจะเจาะลึกถึงจุดอ่อนข้างในตัวเจ้า",
						"hindi": "सावधान। वह तुम्हारी कमज़ोरियों का फायदा उठाएगा।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "이미 늦었어. 네 영혼은 이미 잠식당하고 있지 않나?",
						"english": "Too late. Hasn't your soul already been consumed?",
						"japanese": "もう遅い。お前の魂はもう蝕まれているのではないか？",
						"chinese": "太迟了。你的灵魂不是已经被吞噬了吗？",
						"french": "Trop tard. Ton âme n'est-elle pas déjà consumée ?",
						"spanish": "Ya es tarde. ¿Acaso tu alma no ha sido ya consumida?",
						"vietnamese": "Đã quá muộn rồi. Linh hồn ngươi chẳng phải đã bị xâm chiếm rồi sao?",
						"thai": "สายเกินไปแล้ว วิญญาณของเจ้าไม่ได้ถูกกลืนกินไปแล้วหรือไง?",
						"hindi": "बहुत देर हो चुकी है। क्या तुम्हारी आत्मा पहले ही भस्म नहीं हो गई?"
					},
					"speaker": "random_boss",
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "흐흐흐… 감정은 언제나 약점이 될 뿐.",
						"english": "Hehehe... Emotions are always a weakness.",
						"japanese": "フフフ… 感情はいつだって弱点にすぎない。",
						"chinese": "呵呵呵……情感永远是弱点。",
						"french": "Hahaha... Les émotions ne sont qu'une faiblesse.",
						"spanish": "Jajaja... Las emociones siempre son una debilidad.",
						"vietnamese": "Hehe... Cảm xúc luôn là điểm yếu.",
						"thai": "ฮ่าๆๆ... อารมณ์เป็นเพียงจุดอ่อนเสมอ",
						"hindi": "हँ हँ हँ... भावनाएँ हमेशा कमज़ोरी ही होती हैं।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "…다시 한번.",
						"english": "...Once more.",
						"japanese": "…もう一度。",
						"chinese": "……再一次。",
						"french": "...Encore une fois.",
						"spanish": "...Una vez más.",
						"vietnamese": "...Lần nữa.",
						"thai": "...อีกครั้ง",
						"hindi": "...एक बार फिर।"
					},
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "네 고통은 달콤하군. {random_boss}에게 바쳐라.",
						"english": "Your suffering is sweet. Offer it to {random_boss}.",
						"japanese": "お前の苦痛は甘美だ。{random_boss}に捧げよ。",
						"chinese": "你的痛苦很甜美。把它献给{random_boss}。",
						"french": "Ta souffrance est douce. Offre-la à {random_boss}.",
						"spanish": "Tu sufrimiento es dulce. Ofrécelo a {random_boss}.",
						"vietnamese": "Nỗi đau của ngươi thật ngọt ngào. Hãy dâng nó cho {random_boss}.",
						"thai": "ความเจ็บปวดของเจ้าช่างหอมหวาน จงถวายมันแก่ {random_boss}",
						"hindi": "तुम्हारा दर्द मीठा है। इसे {random_boss} को अर्पित करो।"
					},
					"type": "speech"
				},
				{
					"action": "enter",
					"speaker": "brim",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						2,
						3
					]
				},
				{
					"speaker": "brim",
					"emotion": "base",
					"content": {
						"korean": "이봐, 일어서. 아직 끝나지 않았어.",
						"english": "Hey, get up. It's not over yet.",
						"japanese": "おい、立て。まだ終わってないぞ。",
						"chinese": "喂，起来。还没结束呢。",
						"french": "Hé, lève-toi. Ce n'est pas encore fini.",
						"spanish": "Oye, levántate. Todavía no ha terminado.",
						"vietnamese": "Này, đứng dậy đi. Vẫn chưa kết thúc đâu.",
						"thai": "เฮ้ ลุกขึ้น. มันยังไม่จบ",
						"hindi": "अरे, उठो। यह अभी खत्म नहीं हुआ है।"
					},
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"숨 막히는 고요. 루멘의 '구원'은 진실을 덮었다.",
			"억압된 감정은 사라지지 않고, 뒤틀린 형상으로 세계를 좀먹는다.",
			"새로운 질서는 영혼을 잠식하고, 저항은 더 큰 대가를 요구했다.",
			"브림은 그 대가를 알면서도, 또 다른 길을 제시한다. 파괴인가, 해방인가."
		],
		"english": [
			"Breathtaking silence. Lumen's 'salvation' veiled the truth.",
			"Suppressed emotions don't vanish; they fester, corrupting the world in twisted forms.",
			"A new order devoured souls, and resistance demanded a greater price.",
			"Brim, knowing the cost, offers another path. Destruction or liberation?"
		],
		"japanese": [
			"息をのむ静寂。ルーメンの「救済」は真実を覆い隠した。",
			"抑圧された感情は消えず、歪んだ姿で世界を蝕む。",
			"新しい秩序は魂を蝕み、抵抗はより大きな代償を要求した。",
			"ブリムはその代償を知りながらも、別の道を示す。破壊か、解放か。"
		],
		"chinese": [
			"令人窒息的寂静。卢门的“救赎”掩盖了真相。",
			"被压抑的情感并未消失，而是以扭曲的形态侵蚀着世界。",
			"新的秩序吞噬着灵魂，而抵抗则需要付出更大的代价。",
			"布林明知代价，却指出了另一条路。是毁灭，还是解放？"
		],
		"french": [
			"Un silence suffocant. La 'rédemption' de Lumen a voilé la vérité.",
			"Les émotions refoulées ne disparaissent pas ; elles gangrènent le monde sous des formes tordues.",
			"Un nouvel ordre dévorait les âmes, et la résistance exigeait un prix plus élevé.",
			"Brim, connaissant le prix, propose une autre voie. Destruction ou libération ?"
		],
		"spanish": [
			"Un silencio sofocante. La 'salvación' de Lumen veló la verdad.",
			"Las emociones reprimidas no desaparecen; se pudren, corrompiendo el mundo en formas retorcidas.",
			"Un nuevo orden devoró almas, y la resistencia exigió un precio mayor.",
			"Brim, conociendo el costo, ofrece otro camino. ¿Destrucción o liberación?"
		],
		"vietnamese": [
			"Sự tĩnh lặng nghẹt thở. 'Cứu rỗi' của Lumen che giấu sự thật.",
			"Cảm xúc bị kìm nén không biến mất, chúng thối rữa, ăn mòn thế giới dưới những hình thái méo mó.",
			"Trật tự mới nuốt chửng linh hồn, và sự kháng cự đòi hỏi một cái giá đắt hơn.",
			"Brim, biết rõ cái giá phải trả, vẫn đưa ra một con đường khác. Hủy diệt hay giải phóng?"
		],
		"thai": [
			"ความเงียบสงัดที่น่าอึดอัด 'การไถ่บาป' ของลูเมนปกปิดความจริงไว้",
			"อารมณ์ที่ถูกกดขี่ไม่ได้หายไป พวกมันกลับเน่าเฟะกัดกินโลกในรูปทรงที่บิดเบี้ยว",
			"ระเบียบใหม่กลืนกินดวงวิญญาณ และการต่อต้านเรียกร้องราคาที่สูงขึ้น",
			"บริม แม้รู้ถึงราคา เสนออีกเส้นทาง การทำลายล้างหรือการปลดปล่อย?"
		],
		"hindi": [
			"दम घोंट देने वाली खामोशी। ल्यूमेन की 'मुक्ति' ने सच को ढक दिया।",
			"दमित भावनाएँ गायब नहीं होतीं; वे विकृत रूपों में दुनिया को भ्रष्ट करती हैं।",
			"एक नई व्यवस्था ने आत्माओं को निगल लिया, और प्रतिरोध ने एक बड़ी कीमत चुकाई।",
			"ब्रिम, कीमत जानते हुए भी, एक और रास्ता दिखाता है। विनाश या मुक्ति?"
		]
	}
} as const;
