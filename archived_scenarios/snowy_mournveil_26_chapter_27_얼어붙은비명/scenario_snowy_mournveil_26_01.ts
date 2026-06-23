export const scenario_snowy_mournveil_26_01 = {
	"scenario_id": "snowy_mournveil_26_01",
	"order": 1,
	"act": "intro",
	"theme": "snowy",
	"actors": {
		"eira": {
			"id": "mon_0c37c014-b5ca-4f2f-ad03-5d393e5b2eb1",
			"name": {
				"korean": "에이라",
				"english": "Eira",
				"japanese": "エイラ",
				"chinese": "艾拉",
				"french": "Eira",
				"spanish": "Eira",
				"vietnamese": "Eira",
				"thai": "ไอรา",
				"hindi": "ऐरा"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8e2970b7-bcb1-4b1c-6bf0-93106b373500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/0ca1ec09-a624-450f-054a-b98de58bdb00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"차가운 설원, 그 끝에 거대한 그림자가 솟아 있었다.",
			"전설 속 '모운베일' 조각상. 그 기운은 온몸을 파고들었다.",
			"알 수 없는 두려움. 그리고 잊었던 기억의 조각들이 떠올랐다."
		],
		"english": [
			"At the end of the cold, snowy plains, a colossal shadow loomed.",
			"The legendary 'Moonveil' statue. Its aura seeped into my very core.",
			"An unknown fear. And fragments of forgotten memories surfaced."
		],
		"japanese": [
			"冷たい雪原の果てに、巨大な影がそびえ立っていた。",
			"伝説の『ムーンベイル』像。その気配は全身に染み渡った。",
			"未知の恐怖。そして、忘れていた記憶の断片が蘇った。"
		],
		"chinese": [
			"寒冷的雪原尽头，一个巨大的黑影耸立着。",
			"传说中的‘月幕’雕像。那气息渗入全身。",
			"莫名的恐惧。以及被遗忘的记忆碎片浮现。"
		],
		"french": [
			"Au bout des étendues enneigées, une ombre colossale se dressait.",
			"La statue légendaire 'Moonveil'. Son aura transperçait mon être.",
			"Une peur inconnue. Et des fragments de souvenirs oubliés refirent surface."
		],
		"spanish": [
			"Al final de la fría llanura nevada, una sombra gigantesca se alzaba.",
			"La estatua legendaria 'Moonveil'. Su aura me caló hasta los huesos.",
			"Un miedo desconocido. Y fragmentos de recuerdos olvidados afloraron."
		],
		"vietnamese": [
			"Nơi cuối vùng tuyết nguyên lạnh giá, một cái bóng khổng lồ sừng sững.",
			"Tượng 'Moonveil' trong truyền thuyết. Hồn khí của nó thấm vào khắp cơ thể.",
			"Một nỗi sợ vô hình. Và những mảnh ký ức lãng quên ùa về."
		],
		"thai": [
			"ณ ปลายสุดของทุ่งหิมะอันหนาวเหน็บ มีเงาขนาดมหึมาตั้งตระหง่านอยู่",
			"รูปปั้น 'มูนเวล' ในตำนาน พลังงานของมันซึมซับเข้าสู่ทั่วร่าง",
			"ความกลัวที่ไม่รู้จัก และชิ้นส่วนความทรงจำที่ลืมเลือนก็ผุดขึ้นมา"
		],
		"hindi": [
			"ठंडी बर्फीली मैदान के छोर पर, एक विशाल परछाई उभर रही थी।",
			"पौराणिक 'मूनवेल' प्रतिमा। उसकी आभा पूरे शरीर में समा गई।",
			"एक अनजाना डर। और भूली हुई यादों के टुकड़े उभर आए।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "광활한 설원, 모든 온기를 거부하는 얼음 조각상이 솟아 있었다.",
						"english": "On the vast snowy plain, an ice statue rose, rejecting all warmth.",
						"japanese": "広大な雪原には、あらゆる温もりを拒む氷の彫像がそびえ立っていた。",
						"chinese": "广阔的雪原上，一座拒斥一切温暖的冰雕耸立着。",
						"french": "Dans la vaste étendue enneigée, une statue de glace se dressait, rejetant toute chaleur.",
						"spanish": "En la vasta llanura nevada, una estatua de hielo se alzaba, rechazando todo calor.",
						"vietnamese": "Trên tuyết nguyên bao la, một bức tượng băng sừng sững, xua tan mọi hơi ấm.",
						"thai": "บนทุ่งหิมะอันกว้างใหญ่ มีรูปปั้นน้ำแข็งที่ปฏิเสธความอบอุ่นทั้งมวลตั้งตระหง่านอยู่",
						"hindi": "विशाल बर्फीली मैदान में, एक बर्फ की प्रतिमा खड़ी थी, जो हर गर्माहट को अस्वीकार कर रही थी।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "숨쉬기조차 힘든 추위야. 저게… 모운베일?",
						"english": "It's so cold, I can barely breathe. Is that... Moonveil?",
						"japanese": "息をするのも辛い寒さだ。あれが… ムーンベイル？",
						"chinese": "冷得连呼吸都困难。那是……月幕？",
						"french": "Il fait si froid que j'ai du mal à respirer. C'est ça... Moonveil ?",
						"spanish": "Hace tanto frío que apenas puedo respirar. ¿Esa es... Moonveil?",
						"vietnamese": "Lạnh đến mức khó thở. Đó là... Moonveil sao?",
						"thai": "หนาวจนหายใจแทบไม่ออก นั่น… มูนเวลใช่ไหม?",
						"hindi": "इतनी ठंड है कि सांस लेना भी मुश्किल है। क्या वह... मूनवेल है?"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "eira"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "그래. 잊힌 전설 속 조각상. 벌써부터 느껴져.",
						"english": "Yes. The statue from a forgotten legend. I can feel its presence already.",
						"japanese": "ああ。忘れられた伝説の像。もう感じられる。",
						"chinese": "没错。那是遗忘传说中的雕像。我已经感受到了。",
						"french": "Oui. La statue d'une légende oubliée. Je le sens déjà.",
						"spanish": "Sí. La estatua de una leyenda olvidada. Ya lo siento.",
						"vietnamese": "Phải. Bức tượng trong truyền thuyết bị lãng quên. Ta đã cảm nhận được rồi.",
						"thai": "ใช่ รูปปั้นจากตำนานที่ถูกลืมเลือน ฉันรู้สึกได้แล้ว",
						"hindi": "हाँ। एक भूली हुई किंवदंती की प्रतिमा। मुझे अभी से महसूस हो रहा है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "뭔가… 슬픔이 너무 깊어서 얼어붙은 것 같은 기운.",
						"english": "Something... a feeling like sorrow so deep it's frozen solid.",
						"japanese": "何だか… 悲しみが深すぎて凍りついたような気配。",
						"chinese": "总觉得……那是一种悲伤深重到仿佛被冰封的气息。",
						"french": "Quelque chose... une aura comme une tristesse si profonde qu'elle en est gelée.",
						"spanish": "Algo... una sensación como si la tristeza fuera tan profunda que se ha congelado.",
						"vietnamese": "Một cảm giác... như thể nỗi buồn quá sâu sắc nên đã đóng băng lại.",
						"thai": "บางอย่าง... พลังงานที่เหมือนความโศกเศร้าที่ลึกซึ้งจนกลายเป็นน้ำแข็ง",
						"hindi": "कुछ ऐसा... जैसे दुख इतना गहरा हो कि जम गया हो, ऐसी अनुभूति।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "슬픔이라니? 난 그냥 오싹한 기운만 느껴지는데.",
						"english": "Sorrow? I just feel an eerie chill.",
						"japanese": "悲しみだって？俺にはただ不気味な気配しか感じられないが。",
						"chinese": "悲伤？我只感觉到一股阴森的气息。",
						"french": "De la tristesse ? Je ne ressens qu'une ambiance glaciale.",
						"spanish": "¿Tristeza? Yo solo siento un escalofrío inquietante.",
						"vietnamese": "Nỗi buồn ư? Tôi chỉ cảm thấy một luồng khí rợn người.",
						"thai": "ความโศกเศร้าเหรอ? ฉันสัมผัสได้แค่ความเย็นยะเยือกเท่านั้นเอง",
						"hindi": "दुख? मुझे तो बस एक भयानक ठंडक महसूस हो रही है।"
					},
					"speaker": "character_any"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						2,
						2
					],
					"type": "direction",
					"speaker": "eira"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이런, 여기 유물이 있어. 낡았지만… 깨끗해.",
						"english": "Oh, there's an artifact here. It's old... but clean.",
						"japanese": "おや、ここに遺物がある。古いが…綺麗だ。",
						"chinese": "啊，这里有个遗物。虽然很旧……但很干净。",
						"french": "Tiens, il y a un artefact ici. Il est vieux... mais propre.",
						"spanish": "Vaya, aquí hay un artefacto. Es viejo... pero está limpio.",
						"vietnamese": "Ôi, có một di vật ở đây. Tuy cũ... nhưng sạch sẽ.",
						"thai": "โอ้ะ ที่นี่มีโบราณวัตถุ มันเก่าแก่… แต่สะอาดนะ",
						"hindi": "अरे, यहाँ एक कलाकृति है। पुरानी है... पर साफ है।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이상하네. 뭔가 중요한 부분이 지워진 것 같아.",
						"english": "Strange. It seems like an important part has been erased.",
						"japanese": "おかしいな。何か重要な部分が消されたようだ。",
						"chinese": "奇怪。好像有什么重要的部分被抹去了。",
						"french": "Étrange. On dirait qu'une partie importante a été effacée.",
						"spanish": "Extraño. Parece que una parte importante ha sido borrada.",
						"vietnamese": "Lạ thật. Hình như có một phần quan trọng đã bị xóa đi.",
						"thai": "แปลกจัง ดูเหมือนส่วนสำคัญบางอย่างถูกลบไป",
						"hindi": "अजीब है। लगता है कोई अहम हिस्सा मिटा दिया गया है।"
					},
					"speaker": "character_1"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "…마치 기억이 지워진 것처럼. 이 설원의 모든 것이 그래.",
						"english": "...Like memories erased. Everything in this snowy field is like that.",
						"japanese": "「…まるで記憶が消されたみたいに。この雪原の全てがそう。」",
						"chinese": "“……仿佛记忆被抹去了一样。这雪原的一切都是如此。”",
						"french": "...Comme si les souvenirs avaient été effacés. Tout dans ce champ de neige est pareil.",
						"spanish": "...Como si los recuerdos hubieran sido borrados. Todo en este campo nevado es así.",
						"vietnamese": "...Cứ như ký ức đã bị xóa vậy. Mọi thứ trên cánh đồng tuyết này đều thế.",
						"thai": "...ราวกับความทรงจำถูกลบไป ทุกสิ่งในทุ่งหิมะนี้ก็เป็นเช่นนั้น",
						"hindi": "...जैसे यादें मिटा दी गई हों। इस बर्फीले मैदान में सब कुछ ऐसा ही है।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "기억… 잃어버린….",
						"english": "Memories... lost...",
						"japanese": "「記憶…失われた…。」",
						"chinese": "“记忆……遗失的……”",
						"french": "Des souvenirs... perdus...",
						"spanish": "Recuerdos... perdidos...",
						"vietnamese": "Ký ức... mất mát...",
						"thai": "ความทรงจำ...ที่หายไป...",
						"hindi": "यादें... खोई हुई..."
					},
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "에이라? 괜찮아?",
						"english": "Eira? Are you alright?",
						"japanese": "「エイラ？大丈夫？」",
						"chinese": "“艾拉？你还好吗？”",
						"french": "Eira ? Tu vas bien ?",
						"spanish": "¿Eira? ¿Estás bien?",
						"vietnamese": "Eira? Cậu có sao không?",
						"thai": "เอร่า? ไม่เป็นไรนะ?",
						"hindi": "ऐरा? तुम ठीक हो?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "아니. 그냥… 오래된 기억이 떠오르려는 것 같아서.",
						"english": "No. Just... an old memory trying to resurface.",
						"japanese": "「ううん。ただ…古い記憶が蘇ろうとしているみたいで。」",
						"chinese": "“不。只是……好像有些旧记忆要浮现了。”",
						"french": "Non. C'est juste... comme si un vieux souvenir essayait de refaire surface.",
						"spanish": "No. Es solo... como si un viejo recuerdo intentara resurgir.",
						"vietnamese": "Không. Chỉ là... một ký ức cũ dường như đang cố gắng hiện về.",
						"thai": "ไม่. แค่... เหมือนความทรงจำเก่าๆ กำลังจะกลับมา",
						"hindi": "नहीं। बस... जैसे कोई पुरानी याद ताज़ा होने वाली हो।"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "eira",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						4,
						2
					],
					"action": "enter"
				},
				{
					"content": {
						"korean": "이 조각상에 가까워질수록 기분이 묘해.",
						"english": "The closer I get to this statue, the stranger I feel.",
						"japanese": "「この彫像に近づくほど、奇妙な気分になる。」",
						"chinese": "“越靠近这座雕像，我的感觉就越奇怪。”",
						"french": "Plus je m'approche de cette statue, plus je me sens étrange.",
						"spanish": "Cuanto más me acerco a esta estatua, más extraña me siento.",
						"vietnamese": "Càng đến gần bức tượng này, tôi càng thấy kỳ lạ.",
						"thai": "ยิ่งเข้าใกล้รูปปั้นนี้เท่าไหร่ ยิ่งรู้สึกแปลกๆ",
						"hindi": "इस मूर्ति के जितना करीब आता हूँ, उतना ही अजीब महसूस करता हूँ।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_2",
					"content": {
						"korean": "에이라 혼자 너무 진지한 거 아니야? 그냥 얼음일 뿐이잖아.",
						"english": "Eira, aren't you being too serious? It's just ice.",
						"japanese": "「エイラ、一人で深刻になりすぎじゃない？ただの氷でしょう？」",
						"chinese": "“艾拉，你是不是太认真了？它就只是冰块而已。”",
						"french": "Eira, tu n'es pas un peu trop sérieuse ? Ce n'est que de la glace.",
						"spanish": "¿Eira, no estás tomándotelo demasiado en serio? Solo es hielo.",
						"vietnamese": "Eira, cậu không phải là quá nghiêm trọng chứ? Nó chỉ là băng thôi mà.",
						"thai": "เอร่า, เธอจริงจังเกินไปรึเปล่า? มันก็แค่ก้อนน้ำแข็งนะ",
						"hindi": "ऐरा, तुम ज़्यादा गंभीर नहीं हो रही हो? यह तो बस बर्फ है।"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "아니야. 이 차가움은 단순한 냉기가 아니야.",
						"english": "No. This coldness isn't just a simple chill.",
						"japanese": "「違う。この冷たさは、ただの冷気じゃない。」",
						"chinese": "“不对。这种冰冷不只是单纯的寒气。”",
						"french": "Non. Ce froid n'est pas qu'une simple fraîcheur.",
						"spanish": "No. Esta frialdad no es un simple frío.",
						"vietnamese": "Không. Cái lạnh này không phải chỉ là hơi lạnh đơn thuần.",
						"thai": "ไม่. ความเย็นนี้ไม่ใช่แค่ความเย็นธรรมดา",
						"hindi": "नहीं। यह ठंडक सिर्फ एक साधारण शीतलता नहीं है।"
					}
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "무언가를 잊게 하고… 감정을 얼어붙게 해.",
						"english": "It makes you forget... freezes emotions.",
						"japanese": "「何かを忘れさせ…感情を凍りつかせる。」",
						"chinese": "“它会让人遗忘……让感情冰冻。”",
						"french": "Cela fait oublier quelque chose... et gèle les émotions.",
						"spanish": "Hace olvidar algo... y congela las emociones.",
						"vietnamese": "Nó khiến người ta quên đi điều gì đó... và đóng băng cảm xúc.",
						"thai": "มันทำให้ลืมบางสิ่ง...และทำให้ความรู้สึกหยุดนิ่ง",
						"hindi": "यह कुछ भुला देता है... और भावनाओं को जमा देता है।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…점점 더 불안해지는데.",
						"english": "...I'm getting more and more uneasy.",
						"japanese": "「…だんだん不安になってくる。」",
						"chinese": "“……我越来越不安了。”",
						"french": "...Je deviens de plus en plus inquiet.",
						"spanish": "...Me estoy poniendo cada vez más intranquila.",
						"vietnamese": "...Tôi càng ngày càng cảm thấy bất an.",
						"thai": "...ยิ่งรู้สึกไม่สบายใจมากขึ้นเรื่อยๆ",
						"hindi": "...मैं धीरे-धीरे और बेचैन हो रहा हूँ।"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "eira"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "내 머릿속이… 자꾸 옛날 기억으로 어지러워.",
						"english": "My mind... keeps getting hazy with old memories.",
						"japanese": "「頭の中が…しきりに昔の記憶で混乱している。」",
						"chinese": "“我的脑海里……总是被旧记忆搞得一团糟。”",
						"french": "Ma tête... ne cesse d'être brouillée par de vieux souvenirs.",
						"spanish": "Mi mente... no para de nublarse con viejos recuerdos.",
						"vietnamese": "Trong đầu tôi... cứ mãi quay cuồng với những ký ức xưa cũ.",
						"thai": "ในหัวฉัน...เริ่มสับสนกับความทรงจำเก่าๆ",
						"hindi": "मेरा मन... पुरानी यादों से बार-बार उलझ रहा है।"
					},
					"speaker": "eira"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "무슨 소리야? 집중해야 해.",
						"english": "What was that? Focus!",
						"japanese": "今のは何だ？集中しろ。",
						"chinese": "什么声音？我必须集中精神。",
						"french": "Qu'est-ce que c'était ? Concentre-toi !",
						"spanish": "¿Qué fue eso? ¡Concéntrate!",
						"vietnamese": "Gì vậy? Phải tập trung.",
						"thai": "อะไรกันน่ะ? ต้องมีสมาธิ.",
						"hindi": "क्या आवाज़ थी? मुझे ध्यान देना होगा।"
					}
				},
				{
					"content": {
						"korean": "아니… 이건 단순한 착각이 아니야.",
						"english": "No... this isn't just a simple illusion.",
						"japanese": "いや… これはただの錯覚じゃない。",
						"chinese": "不… 这不是简单的错觉。",
						"french": "Non... ce n'est pas une simple illusion.",
						"spanish": "No... esto no es una simple ilusión.",
						"vietnamese": "Không... đây không phải chỉ là ảo giác.",
						"thai": "ไม่… นี่ไม่ใช่แค่ภาพลวงตา.",
						"hindi": "नहीं... यह सिर्फ एक भ्रम नहीं है।"
					},
					"speaker": "eira",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "이 조각상이… 내 안의 슬픔을 다시 꺼내려 해.",
						"english": "This statue... it's trying to bring out the sorrow within me again.",
						"japanese": "この像が… 私の中の悲しみを再び引き出そうとしている。",
						"chinese": "这座雕像… 它试图再次唤起我内心的悲伤。",
						"french": "Cette statue... elle tente de raviver la tristesse en moi.",
						"spanish": "Esta estatua... intenta revivir la tristeza dentro de mí.",
						"vietnamese": "Bức tượng này... nó đang cố khơi gợi lại nỗi buồn trong tôi.",
						"thai": "รูปปั้นนี้… มันกำลังพยายามนำความเศร้าในตัวข้ากลับมาอีกครั้ง.",
						"hindi": "यह मूर्ति... यह मेरे भीतर के दुख को फिर से जगाने की कोशिश कर रही है।"
					},
					"speaker": "eira"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "불안한 기운이 탐험대 전체를 짓눌렀다. 돌아갈 수 없었다.",
						"english": "An unsettling aura crushed the entire expedition. There was no turning back.",
						"japanese": "不穏な気配が探検隊全体を押し潰した。もう引き返せなかった。",
						"chinese": "一股不安的气息笼罩了整个探险队。已无法回头。",
						"french": "Une aura inquiétante oppressait toute l'expédition. Impossible de faire demi-tour.",
						"spanish": "Un aura inquietante aplastó a toda la expedición. No había vuelta atrás.",
						"vietnamese": "Một luồng khí bất an đè nặng lên toàn bộ đoàn thám hiểm. Không thể quay lại.",
						"thai": "ลางร้ายปกคลุมทั้งคณะสำรวจ เราไม่อาจย้อนกลับได้.",
						"hindi": "एक अशांत आभा ने पूरे अभियान दल को कुचल दिया। पीछे मुड़ना संभव नहीं था।"
					},
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"content": {
						"korean": "크으윽… 어리석은… 너희가 찾는 것은… 고통뿐이다…",
						"english": "Ugh... Fools... All you seek... is pain...",
						"japanese": "くぅぅっ… 愚かな… お前たちが求めるものは… 苦痛だけだ…",
						"chinese": "呃啊… 愚蠢的… 你们所寻求的… 只有痛苦…",
						"french": "Ugh... Imbéciles... Tout ce que vous cherchez... n'est que douleur...",
						"spanish": "Ugh... Necios... Todo lo que buscáis... es dolor...",
						"vietnamese": "Ư… lũ ngốc… tất cả những gì các ngươi tìm kiếm… chỉ là nỗi đau…",
						"thai": "อึก… พวกโง่เขลา… สิ่งที่พวกเจ้าตามหา… มีแต่ความเจ็บปวดเท่านั้น…",
						"hindi": "उफ़... मूर्खों... तुम जो ढूंढ रहे हो... वह केवल दर्द है..."
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "고통? 이 조각상이 고통의 근원이라고?",
						"english": "Pain? This statue is the source of pain?",
						"japanese": "苦痛？この像が苦痛の根源だと？",
						"chinese": "痛苦？这座雕像就是痛苦的根源？",
						"french": "La douleur ? Cette statue est la source de la douleur ?",
						"spanish": "¿Dolor? ¿Esta estatua es la fuente del dolor?",
						"vietnamese": "Nỗi đau? Bức tượng này là nguồn gốc của nỗi đau ư?",
						"thai": "ความเจ็บปวด? รูปปั้นนี้คือต้นกำเนิดของความเจ็บปวดงั้นหรือ?",
						"hindi": "दर्द? क्या यह मूर्ति दर्द का स्रोत है?"
					}
				},
				{
					"content": {
						"korean": "어쨌든 해치웠어! 한 고비 넘겼군.",
						"english": "We did it! One hurdle overcome.",
						"japanese": "とにかく、やった！一山越えたな。",
						"chinese": "总算搞定了！渡过一劫。",
						"french": "On l'a fait ! Une étape de franchie.",
						"spanish": "¡Lo logramos! Un obstáculo superado.",
						"vietnamese": "Dù sao thì cũng xong rồi! Vượt qua một chướng ngại.",
						"thai": "เอาชนะได้แล้ว! ผ่านไปอีกด่านหนึ่ง",
						"hindi": "हमने इसे खत्म कर दिया! एक बाधा पार हुई।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "happy"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "쓰러진 {random_boss}의 잔해에서 싸늘한 바람이 불어왔다.",
						"english": "A chilling wind swept from the remnants of the fallen {random_boss}.",
						"japanese": "倒れた{random_boss}の残骸から冷たい風が吹き付けた。",
						"chinese": "一股寒风从倒下的{random_boss}残骸中吹来。",
						"french": "Un vent glacial souffla des vestiges du {random_boss} tombé.",
						"spanish": "Un viento gélido sopló de los restos del {random_boss} caído.",
						"vietnamese": "Một làn gió lạnh buốt thổi đến từ tàn tích của {random_boss} đã gục ngã.",
						"thai": "ลมหนาวพัดมาจากซากปรักหักพังของ {random_boss} ที่ล้มลง",
						"hindi": "गिरे हुए {random_boss} के अवशेषों से एक सर्द हवा चली।"
					},
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "그러나 진실은 아직 얼어붙은 기억 속에 잠들어 있었다.",
						"english": "Yet, the truth still slumbered within frozen memories.",
						"japanese": "しかし、真実はまだ凍てついた記憶の中に眠っていた。",
						"chinese": "然而，真相依然沉睡在冰封的记忆中。",
						"french": "Cependant, la vérité sommeillait encore dans des souvenirs gelés.",
						"spanish": "Sin embargo, la verdad aún dormía en los recuerdos congelados.",
						"vietnamese": "Tuy nhiên, sự thật vẫn đang ngủ yên trong ký ức đóng băng.",
						"thai": "ทว่าความจริงยังคงหลับใหลอยู่ในความทรงจำที่เยือกแข็ง",
						"hindi": "फिर भी, सच्चाई अभी भी जमी हुई यादों में सोई हुई थी।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "아직… 끝이 아니야. 이 모든 게 더 큰 슬픔의 시작일지도 몰라.",
						"english": "It's not over yet... This might all be the beginning of a greater sorrow.",
						"japanese": "まだ…終わりじゃない。この全てが、より大きな悲しみの始まりなのかもしれない。",
						"chinese": "还没…结束。这一切或许只是更大悲伤的开始。",
						"french": "Ce n'est pas encore fini... Tout cela pourrait n'être que le début d'une tristesse plus grande.",
						"spanish": "Todavía no... Esto podría ser el comienzo de una pena mayor.",
						"vietnamese": "Chưa… chưa kết thúc. Tất cả điều này có thể chỉ là khởi đầu của một nỗi buồn lớn hơn.",
						"thai": "ยัง…ไม่จบ นี่อาจเป็นเพียงจุดเริ่มต้นของความโศกเศร้าที่ยิ่งใหญ่กว่า",
						"hindi": "अभी... यह खत्म नहीं हुआ है। यह सब एक बड़े दुख की शुरुआत हो सकती है।"
					},
					"speaker": "eira"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "하찮은 자들… 이곳의 슬픔은 너희의 이해를 넘어선다.",
						"english": "Insignificant ones... The sorrow here transcends your understanding.",
						"japanese": "取るに足らない者たちよ…ここでの悲しみは、お前たちの理解を超える。",
						"chinese": "渺小的蝼蚁们…这里的悲伤超越了你们的理解。",
						"french": "Insignifiants... La tristesse d'ici dépasse votre compréhension.",
						"spanish": "Insignificantes... La tristeza aquí trasciende vuestra comprensión.",
						"vietnamese": "Những kẻ hèn mọn... Nỗi buồn ở đây vượt quá sự hiểu biết của các ngươi.",
						"thai": "พวกไร้ค่า... ความเศร้าที่นี่เกินกว่าที่พวกเจ้าจะเข้าใจ",
						"hindi": "तुच्छ प्राणियों... यहां का दुख तुम्हारी समझ से परे है।"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "젠장! 아직 포기할 수 없어.",
						"english": "Damn it! I can't give up yet.",
						"japanese": "くそ！まだ諦められない。",
						"chinese": "该死！我不能就这样放弃。",
						"french": "Maudit ! Je ne peux pas abandonner encore.",
						"spanish": "¡Maldita sea! Aún no puedo rendirme.",
						"vietnamese": "Chết tiệt! Vẫn chưa thể từ bỏ.",
						"thai": "บ้าเอ๊ย! ยังยอมแพ้ไม่ได้",
						"hindi": "धत् तेरे की! मैं अभी हार नहीं मान सकता।"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "기억… 잃지 마….",
						"english": "Memories... Don't lose them...",
						"japanese": "記憶…失うな…。",
						"chinese": "记忆…别失去…",
						"french": "Souvenirs... Ne les perds pas...",
						"spanish": "Recuerdos... No los pierdas...",
						"vietnamese": "Ký ức… đừng đánh mất…",
						"thai": "ความทรงจำ... อย่าสูญเสียมันไป...",
						"hindi": "यादें... उन्हें मत खोना..."
					}
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "설원 깊숙한 곳, 거대한 그림자가 길을 막아섰다.",
						"english": "Deep within the snowfield, a colossal shadow blocked their path.",
						"japanese": "雪原の奥深く、巨大な影が道を阻んだ。",
						"chinese": "在雪原深处，一个巨大的身影挡住了去路。",
						"french": "Au plus profond du champ de neige, une ombre colossale bloquait leur chemin.",
						"spanish": "En lo profundo del campo nevado, una sombra colosal bloqueó su camino.",
						"vietnamese": "Sâu trong cánh đồng tuyết, một bóng đen khổng lồ chặn đường.",
						"thai": "ลึกเข้าไปในทุ่งหิมะ เงาขนาดมหึมาขวางทางอยู่.",
						"hindi": "बर्फीले मैदान के गहरे भीतर, एक विशाल छाया ने रास्ता रोक दिया।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "…누구냐. 이 얼어붙은 땅에 발을 들인 어리석은 자들은.",
						"english": "...Who are you? Fools who dare set foot on this frozen land.",
						"japanese": "…誰だ。この凍てついた地に足を踏み入れた愚か者どもは。",
						"chinese": "……是谁。这些踏足这片冰冻之地的愚蠢之人。",
						"french": "...Qui êtes-vous ? Imbéciles qui osez poser le pied sur cette terre gelée.",
						"spanish": "¿Quiénes sois? Necios que os atrevéis a pisar esta tierra helada.",
						"vietnamese": "...Ngươi là ai? Những kẻ ngu ngốc dám đặt chân lên vùng đất băng giá này.",
						"thai": "…พวกเจ้าเป็นใคร? ผู้โง่เขลาที่เหยียบย่างเข้ามาในดินแดนน้ำแข็งนี้.",
						"hindi": "…कौन हो तुम? मूर्खों, जिन्होंने इस जमी हुई भूमि पर कदम रखा।"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "이 기운… 잊힌 전설의 수호자? 아니… 기억을 잃은 존재.",
						"english": "This aura... a guardian of forgotten legends? No... a being stripped of its memories.",
						"japanese": "この気配… 忘れ去られた伝説の守護者か？いや… 記憶を失った存在。",
						"chinese": "这股气息… 遗忘传说中的守护者？不… 是一个失去记忆的存在。",
						"french": "Cette aura... un gardien de légendes oubliées ? Non... un être dépouillé de ses souvenirs.",
						"spanish": "Esta aura... ¿un guardián de leyendas olvidadas? No... un ser despojado de sus recuerdos.",
						"vietnamese": "Luồng khí này... một người bảo vệ của truyền thuyết bị lãng quên? Không... một thực thể đã mất đi ký ức.",
						"thai": "พลังนี้… ผู้พิทักษ์ตำนานที่ถูกลืมงั้นหรือ? ไม่… สิ่งมีชีวิตที่สูญเสียความทรงจำ.",
						"hindi": "यह आभा... भूले हुए किंवदंतियों का रक्षक? नहीं... एक ऐसी सत्ता जिसने अपनी यादें खो दी हैं।"
					},
					"speaker": "eira"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "네가 우리 앞을 막는다면… 쓰러뜨릴 수밖에.",
						"english": "If you block our path... we'll have no choice but to defeat you.",
						"japanese": "我々の道を阻むなら… 倒すしかない。",
						"chinese": "如果你挡住我们的去路… 我们只能击败你。",
						"french": "Si tu bloques notre chemin... nous n'aurons d'autre choix que de te vaincre.",
						"spanish": "Si nos bloqueas el paso... no tendremos más remedio que derrotarte.",
						"vietnamese": "Nếu ngươi chặn đường chúng ta... chúng ta sẽ không còn lựa chọn nào khác ngoài việc hạ gục ngươi.",
						"thai": "หากเจ้าขวางทางเรา… เราก็จำต้องโค่นเจ้าลง.",
						"hindi": "यदि तुम हमारा रास्ता रोकोगे... तो हमें तुम्हें हराना ही होगा।"
					},
					"emotion": "angry",
					"type": "speech"
				}
			]
		}
	]
} as const;
