export const scenario_ExArchive_V0_01 = {
	"scenario_id": "ExArchive_V0_01",
	"order": 1,
	"act": "intro",
	"theme": "modern",
	"actors": {
		"luna": {
			"id": "mon_e27445fb-b351-4243-a187-17acd1227716",
			"name": {
				"korean": "루나",
				"english": "Luna",
				"japanese": "ルナ",
				"chinese": "露娜",
				"french": "Luna",
				"spanish": "Luna",
				"vietnamese": "Luna",
				"thai": "ลูน่า",
				"hindi": "लूना"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/b662c54a-196d-4bed-ad22-788b05396700/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/edff405f-6aca-4fb1-f2c8-1e7ebd51fd00/public"
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
					"content": {
						"korean": "시간이 멈춘 듯한 동네. 모든 것이 빛바래 있었다.",
						"english": "A town where time seemed to stop. Everything was faded.",
						"japanese": "時間が止まったような町。すべてが色褪せていた。",
						"chinese": "仿佛时间停滞的小镇。一切都已褪色。",
						"french": "Un quartier où le temps semblait s'être arrêté. Tout était fané.",
						"spanish": "Un pueblo donde el tiempo parecía detenerse. Todo estaba descolorido.",
						"vietnamese": "Một thị trấn như thời gian đã ngừng lại. Mọi thứ đã phai nhạt.",
						"thai": "เมืองที่เวลาเหมือนหยุดนิ่ง. ทุกอย่างซีดจางไปหมด.",
						"hindi": "एक कस्बा जहाँ समय रुका हुआ लग रहा था। सब कुछ फीका पड़ गया था।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "이게… 우리가 찾던 곳인가?",
						"english": "Is this... the place we were looking for?",
						"japanese": "ここが…私たちが探していた場所なのか？",
						"chinese": "这里就是…我们一直在找的地方吗？",
						"french": "C'est... l'endroit que nous cherchions ?",
						"spanish": "¿Es este... el lugar que buscábamos?",
						"vietnamese": "Đây có phải… nơi chúng ta tìm kiếm không?",
						"thai": "นี่คือ… ที่ที่เรากำลังหาอยู่หรือเปล่า?",
						"hindi": "क्या यह… वही जगह है जिसे हम ढूंढ रहे थे?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "가로등 시계도 멈춰있고, 골목에 떨어진 사진들이 전부 여름이야.",
						"english": "The streetlamp clock is stopped, and all the photos scattered in the alley are from summer.",
						"japanese": "街灯の時計も止まっているし、路地に落ちている写真は全部夏のものだ。",
						"chinese": "路灯的时钟也停了，小巷里散落的照片全是夏天的。",
						"french": "L'horloge du lampadaire est arrêtée, et toutes les photos éparpillées dans la ruelle sont de l'été.",
						"spanish": "El reloj de la farola está parado, y todas las fotos tiradas en el callejón son de verano.",
						"vietnamese": "Đồng hồ đèn đường cũng dừng lại, và tất cả những bức ảnh rơi vãi trong hẻm đều là mùa hè.",
						"thai": "นาฬิกาบนเสาไฟก็หยุดนิ่ง และรูปภาพที่กระจัดกระจายอยู่ในซอยก็เป็นรูปหน้าร้อนทั้งหมด.",
						"hindi": "स्ट्रीटलाइट की घड़ी भी रुकी हुई है, और गली में बिखरी हुई सारी तस्वीरें गर्मी की हैं।"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "luna",
					"spot": [
						4,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "luna",
					"content": {
						"korean": "맞아요. 이곳은… 모든 것이 멈춰버린 곳.",
						"english": "That's right. This place is... where everything has stopped.",
						"japanese": "そうです。ここは…すべてが止まってしまった場所。",
						"chinese": "没错。这里就是…一切都已停滞的地方。",
						"french": "C'est exact. Cet endroit est... où tout s'est arrêté.",
						"spanish": "Así es. Este lugar es... donde todo se ha detenido.",
						"vietnamese": "Đúng vậy. Nơi đây là… nơi mọi thứ đã ngừng lại.",
						"thai": "ใช่แล้ว. ที่นี่คือ… ที่ที่ทุกอย่างหยุดนิ่ง.",
						"hindi": "हाँ। यह जगह है… जहाँ सब कुछ रुक गया है।"
					},
					"emotion": "sad"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"speaker": "luna"
				},
				{
					"content": {
						"korean": "이곳에 너무 오래 머물면 안 돼요.",
						"english": "We shouldn't stay here too long.",
						"japanese": "ここに長く留まってはいけません。",
						"chinese": "我们不应该在这里待太久。",
						"french": "Nous ne devrions pas rester ici trop longtemps.",
						"spanish": "No deberíamos quedarnos aquí mucho tiempo.",
						"vietnamese": "Chúng ta không nên ở đây quá lâu.",
						"thai": "เราไม่ควรอยู่ที่นี่นานเกินไป.",
						"hindi": "हमें यहाँ ज़्यादा देर नहीं रुकना चाहिए।"
					},
					"speaker": "luna",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "왜?",
						"english": "Why?",
						"japanese": "なぜ？",
						"chinese": "为什么？",
						"french": "Pourquoi ?",
						"spanish": "¿Por qué?",
						"vietnamese": "Tại sao?",
						"thai": "ทำไม?",
						"hindi": "क्यों?"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "luna",
					"content": {
						"korean": "과거의 한 장면처럼… 갇히게 될 거예요.",
						"english": "Like a scene from the past… you'll be trapped.",
						"japanese": "過去の一場面のように…閉じ込められてしまいます。",
						"chinese": "就像过去的一幕…你会被困住。",
						"french": "Comme une scène du passé… vous serez piégé.",
						"spanish": "Como una escena del pasado… quedarás atrapado.",
						"vietnamese": "Như một cảnh trong quá khứ… bạn sẽ bị mắc kẹt.",
						"thai": "เหมือนฉากหนึ่งในอดีต… คุณจะติดกับ",
						"hindi": "जैसे अतीत का एक दृश्य… तुम फँस जाओगे।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…점점 발걸음이 무거워지는 것 같아.",
						"english": "…My steps feel heavier and heavier.",
						"japanese": "…だんだん足取りが重くなるようだ。",
						"chinese": "…我的脚步越来越沉重了。",
						"french": "…Mes pas deviennent de plus en plus lourds.",
						"spanish": "…Mis pasos se sienten cada vez más pesados.",
						"vietnamese": "…Bước chân tôi dường như nặng nề hơn.",
						"thai": "…รู้สึกเหมือนก้าวขาหนักขึ้นเรื่อยๆ",
						"hindi": "…मेरे कदम भारी होते जा रहे हैं।"
					},
					"speaker": "character_1",
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "luna",
					"spot": [
						2,
						2
					],
					"type": "direction",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "옛 기억이 자꾸 떠오르죠? 여긴 그런 곳이에요.",
						"english": "Old memories keep resurfacing, don't they? This is that kind of place.",
						"japanese": "古い記憶がしきりに蘇りますよね？ここはそういう場所です。",
						"chinese": "旧记忆不断涌现，不是吗？这里就是这样的地方。",
						"french": "Les vieux souvenirs refont surface, n'est-ce pas ? C'est le genre d'endroit.",
						"spanish": "¿Los viejos recuerdos siguen resurgiendo, verdad? Este es ese tipo de lugar.",
						"vietnamese": "Ký ức cũ cứ ùa về, phải không? Đây là nơi như vậy.",
						"thai": "ความทรงจำเก่าๆ ผุดขึ้นมาไม่หยุดใช่ไหม? ที่นี่เป็นที่แบบนั้นแห",
						"hindi": "पुरानी यादें बार-बार आ रही हैं, है ना? यह ऐसी ही जगह है।"
					},
					"speaker": "luna",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "누군가 이걸 꾸민 거야?",
						"english": "Did someone orchestrate this?",
						"japanese": "誰かがこれを仕組んだのか？",
						"chinese": "是有人精心策划的吗？",
						"french": "Quelqu'un a orchestré ça ?",
						"spanish": "¿Alguien orquestó esto?",
						"vietnamese": "Có ai đó đã dàn dựng chuyện này à?",
						"thai": "มีใครบางคนจัดฉากเรื่องนี้เหรอ?",
						"hindi": "क्या किसी ने यह सब रचा है?"
					}
				},
				{
					"speaker": "luna",
					"content": {
						"korean": "여길 떠나지 못하는 영혼들이… 과거를 붙잡고 있어요.",
						"english": "Souls unable to leave this place… are clinging to the past.",
						"japanese": "ここを離れられない魂たちが…過去にしがみついているの。",
						"chinese": "无法离开这里的灵魂…正紧抓着过去不放。",
						"french": "Les âmes incapables de quitter cet endroit… s'accrochent au passé.",
						"spanish": "Las almas que no pueden abandonar este lugar… se aferran al pasado.",
						"vietnamese": "Những linh hồn không thể rời khỏi nơi này… đang bám víu vào quá khứ.",
						"thai": "เหล่าวิญญาณที่ไม่อาจจากที่นี่ไป… กำลังยึดติดอยู่กับอดีต",
						"hindi": "जो आत्माएँ इस जगह को छोड़ नहीं सकतीं… वे अतीत से चिपकी हुई हैं।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_2",
					"content": {
						"korean": "그럼… 우린 그들을 깨워야 해?",
						"english": "Then… we have to wake them up?",
						"japanese": "じゃあ…私たちは彼らを起こさなきゃいけないの？",
						"chinese": "那么…我们必须唤醒他们吗？",
						"french": "Alors… nous devons les réveiller ?",
						"spanish": "¿Entonces… tenemos que despertarlos?",
						"vietnamese": "Vậy thì… chúng ta phải đánh thức họ à?",
						"thai": "งั้น… เราต้องปลุกพวกเขาเหรอ?",
						"hindi": "तो… हमें उन्हें जगाना होगा?"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						1,
						2
					],
					"type": "direction",
					"speaker": "luna",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "luna",
					"content": {
						"korean": "뒤돌아보면 안 돼요. 발이 땅에 붙어버릴 거예요.",
						"english": "Don't look back. Your feet will be glued to the ground.",
						"japanese": "振り返ってはいけません。足が地面に縫い付けられてしまいますよ。",
						"chinese": "别回头看。你的脚会粘在地上。",
						"french": "Ne regardez pas en arrière. Vos pieds seront collés au sol.",
						"spanish": "No mires atrás. Tus pies se pegarán al suelo.",
						"vietnamese": "Đừng nhìn lại. Chân bạn sẽ dính chặt vào đất.",
						"thai": "อย่ามองย้อนกลับไปนะ เท้าจะติดกับพื้น",
						"hindi": "पीछे मुड़कर मत देखना। तुम्हारे पैर ज़मीन से चिपक जाएँगे।"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "돌아갈 수 없다는 거야?",
						"english": "You mean we can't go back?",
						"japanese": "戻れないってこと？",
						"chinese": "你的意思是…我们回不去了？",
						"french": "Tu veux dire qu'on ne peut pas revenir en arrière ?",
						"spanish": "¿Quieres decir que no podemos volver?",
						"vietnamese": "Ý bạn là chúng ta không thể quay lại à?",
						"thai": "หมายความว่าเรากลับไปไม่ได้แล้วเหรอ?",
						"hindi": "क्या इसका मतलब है कि हम वापस नहीं जा सकते?"
					}
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "어디선가 옛 노래가 더 크게 들려왔다. 발걸음은 더 무거워졌다.",
						"english": "An old song grew louder from somewhere. My steps became even heavier.",
						"japanese": "どこからか古い歌がより大きく聞こえてきた。足取りはさらに重くなった。",
						"chinese": "不知从何处传来更响亮的旧歌声。脚步愈发沉重。",
						"french": "Une vieille chanson résonnait plus fort de quelque part. Mes pas sont devenus encore plus lourds.",
						"spanish": "Una vieja canción sonaba más fuerte desde algún lugar. Mis pasos se volvieron aún más pesados.",
						"vietnamese": "Từ đâu đó, một bài hát cũ vang lên to hơn. Bước chân trở nên nặng nề hơn nữa.",
						"thai": "เสียงเพลงเก่าแก่ดังขึ้นจากที่ไหนสักแห่ง ก้าวเท้าหนักอึ้งลงไปอีก",
						"hindi": "कहीं से एक पुराना गाना और ज़ोर से सुनाई दिया। कदम और भारी हो गए।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "…그래도, 가야 해. 진실을 찾아야 하니까.",
						"english": "…Still, we have to go. We must find the truth.",
						"japanese": "…それでも、行かなければ。真実を見つけなければならないから。",
						"chinese": "…即便如此，我们也必须前行。因为我们必须找到真相。",
						"french": "…Pourtant, il faut y aller. Nous devons trouver la vérité.",
						"spanish": "…Aun así, tenemos que ir. Debemos encontrar la verdad.",
						"vietnamese": "…Dù sao đi nữa, chúng ta phải đi. Vì chúng ta phải tìm ra sự thật.",
						"thai": "…ถึงอย่างนั้นก็เถอะ เราต้องไป ต้องตามหาความจริง",
						"hindi": "…फिर भी, हमें जाना होगा। हमें सच खोजना है।"
					},
					"speaker": "character_3",
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "시간이 멈춘 동네의 심장부에 도달했다.",
						"english": "Reached the heart of the town where time stands still.",
						"japanese": "時が止まった町の中心部に到達した。",
						"chinese": "抵达了时间停滞的城镇中心。",
						"french": "Atteint le cœur du quartier où le temps s'est arrêté.",
						"spanish": "Llegué al corazón del pueblo donde el tiempo se detuvo.",
						"vietnamese": "Đã đến trung tâm thị trấn nơi thời gian ngừng lại.",
						"thai": "มาถึงใจกลางเมืองที่เวลาหยุดนิ่ง",
						"hindi": "समय रुके हुए कस्बे के हृदय में पहुँच गया।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…왔구나. 잊혀진 기억을 찾아서.",
						"english": "...You've come. To find forgotten memories.",
						"japanese": "…来たか。忘れられた記憶を求めて。",
						"chinese": "…你来了。为了寻找被遗忘的记忆。",
						"french": "...Tu es venu. Pour retrouver les souvenirs oubliés.",
						"spanish": "...Has venido. En busca de recuerdos olvidados.",
						"vietnamese": "...Ngươi đã đến. Để tìm lại ký ức đã lãng quên.",
						"thai": "...มาแล้วสินะ เพื่อตามหาความทรงจำที่ถูกลืม",
						"hindi": "…तुम आ गए। भूली हुई यादें खोजने।"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "네가 이 모든 걸 꾸민 거야?",
						"english": "Did you orchestrate all of this?",
						"japanese": "君がこの全てを仕組んだのか？",
						"chinese": "这一切都是你策划的吗？",
						"french": "C'est toi qui as manigancé tout ça ?",
						"spanish": "¿Fuiste tú quien orquestó todo esto?",
						"vietnamese": "Ngươi đã dàn xếp tất cả chuyện này sao?",
						"thai": "เธอเป็นคนจัดฉากทั้งหมดนี้เหรอ?",
						"hindi": "क्या यह सब तुम्हारी साज़िश है?"
					}
				},
				{
					"content": {
						"korean": "아니. 난 그저… 멈춰있는 자들을 지킬 뿐.",
						"english": "No. I merely... protect those who are stopped.",
						"japanese": "いや。私はただ… 立ち止まっている者たちを守るだけだ。",
						"chinese": "不。我只是… 守护着那些停滞不前的人。",
						"french": "Non. Je... protège seulement ceux qui sont arrêtés.",
						"spanish": "No. Yo solo... protejo a los que están detenidos.",
						"vietnamese": "Không. Ta chỉ... bảo vệ những kẻ đã dừng lại.",
						"thai": "ไม่หรอก ฉันแค่... ปกป้องผู้ที่หยุดนิ่งเท่านั้นเอง",
						"hindi": "नहीं। मैं तो बस… रुके हुए लोगों की रक्षा करता हूँ।"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "우리는 지나가야 해.",
						"english": "We must pass through.",
						"japanese": "私たちは通り抜けなければならない。",
						"chinese": "我们必须通过。",
						"french": "Nous devons passer.",
						"spanish": "Debemos pasar.",
						"vietnamese": "Chúng ta phải đi qua.",
						"thai": "เราต้องผ่านไป",
						"hindi": "हमें आगे बढ़ना होगा।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "…그럼, 잊혀진 노래를 불러주지.",
						"english": "...Then, I shall sing the forgotten song.",
						"japanese": "…ならば、忘れられた歌を歌ってやろう。",
						"chinese": "…那么，我将唱起被遗忘的歌。",
						"french": "...Alors, je chanterai la chanson oubliée.",
						"spanish": "...Entonces, te cantaré la canción olvidada.",
						"vietnamese": "...Vậy thì, ta sẽ hát bài ca đã bị lãng quên.",
						"thai": "...ถ้าอย่างนั้น ฉันจะร้องเพลงที่ถูกลืมให้ฟัง",
						"hindi": "…तो, मैं तुम्हें भूला हुआ गीत सुनाऊँगा।"
					}
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "멈춰버린 시간이 탐험대를 집어삼켰다.",
						"english": "Time stood still and consumed the expedition.",
						"japanese": "止まった時間が探検隊を飲み込んだ。",
						"chinese": "停滞的时间吞噬了探险队。",
						"french": "Le temps figé engloutit l'expédition.",
						"spanish": "El tiempo detenido consumió a la expedición.",
						"vietnamese": "Thời gian ngừng lại và nuốt chửng đoàn thám hiểm.",
						"thai": "เวลาที่หยุดนิ่งได้กลืนกินคณะสำรวจไปแล้ว",
						"hindi": "रुका हुआ समय अभियान दल को निगल गया।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이곳에 영원히 머물러라. 모두처럼.",
						"english": "Stay here forever. Like everyone else.",
						"japanese": "ここに永遠に留まれ。皆のように。",
						"chinese": "永远留在这里。就像所有人一样。",
						"french": "Reste ici pour toujours. Comme tout le monde.",
						"spanish": "Quédate aquí para siempre. Como todos los demás.",
						"vietnamese": "Ở lại đây mãi mãi. Giống như mọi người khác.",
						"thai": "จงอยู่ที่นี่ตลอดไป เหมือนคนอื่นๆ",
						"hindi": "हमेशा यहीं रहो। सबकी तरह।"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "…아직 끝나지 않았어. 우리는 돌아갈 거야.",
						"english": "...It's not over yet. We'll go back.",
						"japanese": "…まだ終わってない。私たちは戻る。",
						"chinese": "……还没结束。我们会回去的。",
						"french": "...Ce n'est pas encore fini. Nous reviendrons.",
						"spanish": "...Aún no ha terminado. Volveremos.",
						"vietnamese": "...Chưa kết thúc đâu. Chúng ta sẽ quay lại.",
						"thai": "…ยังไม่จบ เราจะกลับไป",
						"hindi": "...अभी खत्म नहीं हुआ है। हम वापस जाएंगे।"
					},
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "멈춰있던 노래가 멎었다. 시간의 흐름이 느껴진다.",
						"english": "The stopped song has ceased. The flow of time can be felt.",
						"japanese": "止まっていた歌が止まった。時間の流れを感じる。",
						"chinese": "停滞的歌声已停止。感受到了时间的流逝。",
						"french": "Le chant arrêté a cessé. Le flux du temps se fait sentir.",
						"spanish": "La canción detenida ha cesado. Se siente el fluir del tiempo.",
						"vietnamese": "Bài hát đã ngừng lại. Cảm nhận được dòng chảy của thời gian.",
						"thai": "บทเพลงที่หยุดนิ่งได้จบลงแล้ว สัมผัสได้ถึงการไหลเวียนของเวลา",
						"hindi": "रुका हुआ गीत थम गया। समय का प्रवाह महसूस हो रहा है।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…결국, 떠나는구나. 이곳의 모든 것을 뒤로 하고.",
						"english": "...In the end, you depart. Leaving everything here behind.",
						"japanese": "…結局、去っていくのか。ここでの全てを後に残して。",
						"chinese": "…最终，你还是离开了。将这里的一切抛诸脑后。",
						"french": "...Finalement, tu pars. Laissant tout derrière toi ici.",
						"spanish": "...Al final, te vas. Dejando todo aquí atrás.",
						"vietnamese": "...Cuối cùng, ngươi cũng rời đi. Bỏ lại tất cả mọi thứ ở đây.",
						"thai": "...ในที่สุดเธอก็จากไป ทิ้งทุกสิ่งทุกอย่างที่นี่ไว้เบื้องหลัง",
						"hindi": "…आख़िरकार, तुम जा रहे हो। यहाँ सब कुछ पीछे छोड़कर।"
					},
					"speaker": "random_boss",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "멈춰있는 건 답이 아니야.",
						"english": "Staying still is not the answer.",
						"japanese": "立ち止まっているだけでは答えにならない。",
						"chinese": "停滞不前不是答案。",
						"french": "Rester immobile n'est pas la solution.",
						"spanish": "Quedarse quieto no es la respuesta.",
						"vietnamese": "Dừng lại không phải là câu trả lời.",
						"thai": "การหยุดนิ่งไม่ใช่คำตอบ",
						"hindi": "स्थिर रहना कोई हल नहीं है।"
					},
					"type": "speech"
				},
				{
					"type": "direction",
					"spot": [
						4,
						2
					],
					"speaker": "luna",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "잘했어요. 이제 다음으로… 나아가야 할 때예요.",
						"english": "Well done. Now it's time to... move on to the next.",
						"japanese": "よくやった。さあ、次へ…進むべき時だ。",
						"chinese": "做得好。现在是时候…迈向下一个了。",
						"french": "Bien joué. Il est temps de... passer à la suite.",
						"spanish": "Bien hecho. Ahora es el momento de... avanzar al siguiente.",
						"vietnamese": "Làm tốt lắm. Bây giờ là lúc... tiếp tục đi tới.",
						"thai": "เยี่ยมมาก ได้เวลา... ก้าวต่อไปแล้ว",
						"hindi": "बहुत अच्छे। अब अगले… कदम पर बढ़ने का समय है।"
					},
					"speaker": "luna",
					"emotion": "happy"
				},
				{
					"content": {
						"korean": "동네의 기억은 천천히 흐려졌다. 아직 갈 길이 멀다.",
						"english": "Memories of the town slowly faded. Still a long way to go.",
						"japanese": "街の記憶はゆっくりと薄れていった。まだ先は長い。",
						"chinese": "小镇的记忆渐渐模糊。前路漫漫。",
						"french": "Les souvenirs de la ville s'estompèrent lentement. Le chemin est encore long.",
						"spanish": "Los recuerdos del pueblo se desvanecieron lentamente. Todavía queda mucho camino por recorrer.",
						"vietnamese": "Ký ức về thị trấn dần phai nhạt. Vẫn còn một chặng đường dài.",
						"thai": "ความทรงจำของเมืองเลือนรางลงช้าๆ ยังอีกไกลนัก",
						"hindi": "शहर की यादें धीरे-धीरे धुंधली हो गईं। अभी भी बहुत लंबा रास्ता तय करना है।"
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
			"멈춰버린 동네. 시간마저 빛바랜 풍경.",
			"같은 계절, 같은 사진… 누군가 사라졌다는 단서.",
			"그리움에 잠긴 노래가 희미하게 들려왔다.",
			"우린 그 속으로 들어섰다. 알 수 없는 감정에 이끌려."
		],
		"english": [
			"A town frozen in time. A faded landscape where even time stands still.",
			"Same season, same photo... a clue that someone's vanished.",
			"A faint song, steeped in longing, drifted.",
			"We stepped inside, drawn by an unknown feeling."
		],
		"japanese": [
			"時間が止まった町。時間すらも色褪せた風景。",
			"同じ季節、同じ写真… 誰かが消えた手掛かり。",
			"郷愁に沈んだ歌がかすかに聞こえてきた。",
			"私たちはそこへ足を踏み入れた。未知の感情に導かれて。"
		],
		"chinese": [
			"停滞的小镇。连时间都已褪色的风景。",
			"同样的季节，同样的相片… 某人消失的线索。",
			"一首充满思念的歌声隐约传来。",
			"我们踏入其中。被一种莫名的情感所吸引。"
		],
		"french": [
			"Un quartier figé dans le temps. Un paysage où le temps lui-même s'est estompé.",
			"Même saison, même photo… un indice que quelqu'un a disparu.",
			"Une chanson imprégnée de nostalgie résonnait faiblement.",
			"Nous y sommes entrés, attirés par une émotion inconnue."
		],
		"spanish": [
			"Un pueblo detenido en el tiempo. Un paisaje donde el tiempo mismo se ha desvanecido.",
			"La misma estación, la misma foto… una pista de que alguien desapareció.",
			"Una canción sumida en la nostalgia se escuchaba débilmente.",
			"Entramos en ello, atraídos por una emoción desconocida."
		],
		"vietnamese": [
			"Một thị trấn ngừng lại. Phong cảnh phai nhạt cả thời gian.",
			"Cùng một mùa, cùng một bức ảnh… manh mối ai đó đã biến mất.",
			"Một bài hát đắm chìm trong nỗi nhớ vọng lại.",
			"Chúng tôi bước vào đó, bị cuốn hút bởi một cảm xúc không tên."
		],
		"thai": [
			"เมืองที่หยุดนิ่ง. ทิวทัศน์ที่แม้แต่เวลาก็จางหายไป.",
			"ฤดูเดียวกัน, รูปภาพเดียวกัน... เบาะแสว่ามีคนหายไป.",
			"เพลงที่เต็มไปด้วยความโหยหาแว่วมา.",
			"เราก้าวเข้าไปข้างใน. ดึงดูดโดยความรู้สึกที่ไม่รู้จัก."
		],
		"hindi": [
			"ठहरा हुआ कस्बा। जहाँ समय भी फीका पड़ गया है।",
			"वही मौसम, वही तस्वीर… किसी के गायब होने का सुराग।",
			"यादों में डूबा एक गीत धीरे से सुनाई दिया।",
			"हम उसमें घुस गए। एक अज्ञात भावना से आकर्षित होकर।"
		]
	}
} as const;
